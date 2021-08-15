import BaseMonitor from "../lib/base";

class resourceError extends BaseMonitor{
	constructor(params) {
      super(params)
   }
	registerError() {
      
      window.addEventListener('error', (event)=>{
         try{
            if(!event){
               return;
           }
            let target = event.target
            var isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;
            if(!isElementTarget) return
               
            this.type = 'resource_error'
            this.error_info = `加载${target.tagName}资源失败`
            this.url = target.src || target.href;
            this.error_extra = target
            
            this.recordError(this.isTest)
         } catch (error) {
            console.log("资源加载收集异常",error);
        }
      },true)
	}
}
export default resourceError;
