import BaseMonitor from "../lib/base";

class jsError extends BaseMonitor{
	constructor(params) {
      super(params)
   }
	registerError() {
		window.onerror = (str, source, lineno, colno, error)=>{
         this.type = "js_error";
         this.level = "warn";
         this.msg = str
         this.url = source;
         
         this.recordError()
         
      }
	}
}
export default jsError;
