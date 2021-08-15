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
				this.url = error.stack;
				this.error_extra = info;
				this.recordError(this.isTest);
			} catch (error) {
				console.log("资源加载收集异常", error);
			}
		};
	}
}
export default resourceError;
