import AjaxError from './error/ajaxError'
import jsError from './error/jsError'
import Perfomance from './performance/index'
import './lib/extends'

import BaseMonitor from './lib/base'

class Monitor{
   /*/
   */
   constructor(options){
      if(!options) options = {}
      
      if(typeof options.ajaxError == "undefined") options.ajaxError = true
      if(typeof options.jsError == "undefined") options.jsError = true

      options.ajaxError && new AjaxError(options).registerError();
      options.jsError  && new jsError(options).registerError();
      
      if(options.isPerformance){
         window.addEventListener("beforeunload", ()=>{
            new Perfomance(options).record()
         });
      }
         
   }
}
export default Monitor

// 