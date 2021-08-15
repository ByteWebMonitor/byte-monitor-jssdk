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
				//判断当前被捕获的异常url，是否是异常处理url，防止死循环
				if (event.reason.config && event.reason.config.url) {
					this.error_url = event.reason.config.url;
				}
				this.type = "promise_error";
				this.error_info = event.reason;
				this.error_row = 0;
				this.error_col = 0;
				this.error_extra = "";
            this.recordError(this.isTest);
			} catch (error) {
				console.log(error);
			}
		});
	}
}
export default promiseError;
