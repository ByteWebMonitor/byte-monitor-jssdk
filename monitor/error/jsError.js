import BaseMonitor from "../lib/base";

class jsError extends BaseMonitor{
	constructor(params) {
      super(params)
   }
	registerError() {
      
		window.onerror = (str, source, lineno, colno, error)=>{
         this.type = "js_error";
         this.error_info = str
         this.error_url = source
         this.error_row = lineno
         this.error_col = colno
         this.error_extra = error
         this.recordError(this.isTest)
         
      }
	}
}
export default jsError;
