import AjaxError from './error/ajaxError'
import jsError from './error/jsError'
import Perfomance from './performance/index'
import './lib/extends'

class Monitor{
   /*/
   */
   constructor(options){
      if(!options) options = {}
      this.ajaxError = options.ajaxError
      this.jsError = options.jsError
      this.isPerformance = options.isPerformance
      this.ajaxError && new AjaxError(options).registerError();
      this.jsError  && new jsError(options).registerError();
      
      if(this.isPerformance){
         window.addEventListener("beforeunload", ()=>{
            console.log('load');
            new Perfomance(options).record()
         });
      }
         
   }
}
export default Monitor

//if(typeof options.ajaxError == "undefined") options.ajaxError = true