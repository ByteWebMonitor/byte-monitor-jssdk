import BaseMonitor from "../lib/base";

class resourceError extends BaseMonitor {
	constructor(params) {
		super(params);
	}
	registerError(Vue) {
		if (!Vue) return;
		Vue.config.errorHandler = (error, vm, info) => {
			try {
            let metaData = {}
				if (Object.prototype.toString.call(vm) === "[object Object]") {
					metaData.componentName = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
					metaData.propsData = vm.$options.propsData;
				}
				this.type = "vue_error";
				this.error_info = error.message;
				this.error_url = '组件名'+metaData.componentName
            this.error_extra = error.stack;
            console.dir(error)
            console.dir(vm)
            console.dir(info)
				this.recordError(this.isTest);
			} catch (e_error) {
				console.log("资源加载收集异常", e_error);
			}
		};
	}
}
export default resourceError;
