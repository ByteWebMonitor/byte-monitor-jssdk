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
      axios.post(this.reportUrl,
      [localStorage.getItem("page_performance"), ...BaseMonitor.queue])
      .then(()=>{})
      axios.post(this.reportUrl,
      [BaseMonitor.deviceInfo])
      .then(()=>{})
   }
   constructor(params){
      this.type = ''
      this.level = 0
      this.msg = ''
      this.url = '' 
      this.position = ''
      this.reportUrl = params.reportUrl
      this.errorObj = null

      if(BaseMonitor.deviceInfo == '')
         BaseMonitor.deviceInfo = JSON.stringify(DeviceInfo.getDeviceInfo())
   }
   recordError(){
      let info = `错误类别：${this.type}\n`
      info += `错误信息：${this.msg}\n`
      info += `出错的URL：${this.url}\n`
      //
      BaseMonitor.queuePush(info)
      console.log('%c'+info,'color:blue;');
   }
   getDeviceInfo(){
      return BaseMonitor.deviceInfo
   }
}
BaseMonitor.queue = []
BaseMonitor.deviceInfo = ''
export default BaseMonitor