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
         
         this.error_info = String(event.target.response)
         var text = /<pre>(.*)<\/pre>/.exec(this.error_info)[1]
         if(text !== '')
            this.error_info = text
         this.error_url = event.target.responseURL
         this.error_extra = {
            status: event.target.status,
            statusText: event.target.statusText           
         }
         this.recordError(this.isTest)
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