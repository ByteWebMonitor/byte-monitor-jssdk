/**
 * 处理传来的错误信息并上报
 */
import DeviceInfo from "./device";
import axios from 'axios'
class BaseMonitor {
   static queuePush(obj){
      BaseMonitor.queue.push(obj)
   }
   static queueUpload(){
      // 错误上报
      axios.post(this.reportUrl,BaseMonitor.queue)
      // 设备上报
      axios.post(this.reportUrl, BaseMonitor.deviceInfo)
      // 性能上报
      axios.post(this.reportUrl, JSON.parse(localStorage.getItem("page_performance")))
   }
   constructor(params){
      this.reportUrl = params.reportUrl
      this.type = "noname_error";
      this.error_info = ''
      this.error_url = ''
      this.error_row = ''
      this.error_col = ''
      this.error_extra = ''
      this.isTest = true

      if(BaseMonitor.deviceInfo == '')
         BaseMonitor.deviceInfo = DeviceInfo.getDeviceInfo()
   }
   recordError(isTest){
      // 在测试模式下，会立即console出该错误
      let info = {
         type : this.type,
         error_info : this.error_info,
         error_url : this.error_url,
         error_row : this.error_row,
         error_col : this.error_col,
         error_extra : this.error_extra,
         user_id: localStorage.getItem('ps_markUv'),
         time:new Date()
      }
      if(isTest === true){
         console.log('%c捕获到 '+ this.type,'color:blue;');
         console.log(info)
      }
      BaseMonitor.queuePush(info)
      // console.log('%c'+info,'color:blue;');
   }
}
BaseMonitor.queue = []
BaseMonitor.deviceInfo = ''
export default BaseMonitor