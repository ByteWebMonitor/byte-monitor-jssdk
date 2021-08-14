import BaseMonitor from '../lib/base'
class AjaxError extends BaseMonitor {
	constructor(params) {
      super(params)
   }
	registerError() {
      let origin = XMLHttpRequest.prototype.send;
      let _handleEvent = (event)=>{
         // console.log(event);
         if(!event || ! event.currentTarget || event.currentTarget.status==200) return
         this.type = "ajax_error"
         this.level = "warn"
         this.msg = event.target.response
         this.url = event.target.responseURL
         this.errorObj = {
            status: event.target.status,
            statusText: event.target.statusText           
         }
         this.recordError()
         // console.log(event);
      }
		XMLHttpRequest.prototype.send = function() {
         this.addEventListener('error', _handleEvent);
         this.addEventListener('load', _handleEvent);
         this.addEventListener('abort', _handleEvent);
         return origin.apply(this, arguments)
      };
   }
}


export default AjaxError