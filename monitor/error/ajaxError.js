import BaseMonitor from '../lib/base'
class AjaxError extends BaseMonitor {
	constructor(params) {
      super(params)
   }
	registerError() {
      let origin = XMLHttpRequest.prototype.send;
      let _handleEvent = (event)=>{

         // if(!event || ! event.currentTarget ) return
         if(!event || ! event.currentTarget.response || event.currentTarget.status==200) return
         console.log(event);
         this.type = "ajax_error"
         // console.log('@');
         // console.dir(event.currentTarget);
         this.error_info = event.target.response
         var text = this.error_info
         // var text = /<pre>(.*)<\/pre>/.exec(this.error_info)[1]
         if(text !== '')
            this.error_info = text
         this.error_url = event.target.responseURL
         this.error_extra = {
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