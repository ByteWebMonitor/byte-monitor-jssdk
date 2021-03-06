/**
 * 处理传来的错误信息并上报
 */
import DeviceInfo from "./device";
import '../lib/extends'
import {ajax} from './ajax'
import md5 from 'js-md5'
class BaseMonitor {
   static queuePush(obj){
      
      var index = BaseMonitor.queue.indexOfAttr(obj, 'hash')
      if(index>=0){
         BaseMonitor.queue[index].amount++
      }else{
         BaseMonitor.queue.push(obj)
      }
   }
   static queueUpload(){
      ajax({
         url:BaseMonitor.baseUrl + '/error/upload',
         data:BaseMonitor.queue,
      })
      ajax({
         url:BaseMonitor.baseUrl + '/performance/upload',
         data:JSON.parse(localStorage.getItem("page_performance")),
      })
      ajax({
         url:BaseMonitor.baseUrl + '/device/upload',
         data:BaseMonitor.deviceInfo,
      })
      // 错误上报
      // axios.post(this.reportUrl,BaseMonitor.queue)
      // 设备上报
      // axios.post(this.reportUrl, BaseMonitor.deviceInfo)
      // 性能上报
      // axios.post(this.reportUrl, JSON.parse(localStorage.getItem("page_performance")))
   }
   constructor(params){
      this.baseUrl = params.baseUrl
      this.type = "noname_error";
      this.error_info = ''
      this.error_url = ''
      this.error_row = 0
      this.error_col = 0
      this.error_extra = ''
      this.consoleError = params.consoleError
      this.amount = 0
      this.hash = ''
      this.app_id = params.app_id
      if(BaseMonitor.baseUrl == '')
         BaseMonitor.baseUrl = params.baseUrl
      if(BaseMonitor.deviceInfo == ''){
         var obj = DeviceInfo.getDeviceInfo()
         obj.app_id = this.app_id
         BaseMonitor.deviceInfo = obj
      }
         
   }
   recordError(){
      // 在测试模式下，会立即console出该错误
      let info = {
         type : this.type,
         error_info : this.error_info,
         error_url : this.error_url,
         error_row : this.error_row,
         error_col : this.error_col,
         error_extra : this.error_extra,
         hash: md5(this.error_info + this.error_url),
         amount:1,
         user_id: localStorage.getItem('ps_markUv'),
         app_id:this.app_id,
         time:new Date()
      }
      if(this.consoleError === true){
         console.log('%c捕获到 '+ this.type,'color:blue;');
         console.log(info)
      }
      BaseMonitor.queuePush(info)
      // console.log('%c'+info,'color:blue;');
   }
}
BaseMonitor.queue = []
BaseMonitor.deviceInfo = ''
BaseMonitor.baseUrl = ''
export default BaseMonitor