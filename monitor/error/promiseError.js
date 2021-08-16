import BaseMonitor from "../lib/base";

class promiseError extends BaseMonitor {
	constructor(params) {
		super(params);
	}
	registerError() {
		window.addEventListener("unhandledrejection", (event) => {
			try {
				if (!event || !event.reason) {
					return;
				}
				// console.log(event);
				this.error_url = event.path.toString();
				this.type = "promise_error";
				this.error_info = event.reason;
				// 当发生一个常规的错误（error）并且未被 try..catch 捕获
				this.error_extra = "";
            this.recordError(this.isTest);
			} catch (error) {
				console.log(error);
			}
		});
	}
}
export default promiseError;
