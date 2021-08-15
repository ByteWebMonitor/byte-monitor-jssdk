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
				console.log(event);
				this.error_url = event.reason.config;
				this.type = "promise_error";
				this.error_info = event.reason;
				// this.error_row = 0;
				// this.error_col = 0;
				this.error_extra = "";
            this.recordError(this.isTest);
			} catch (error) {
				console.log(error);
			}
		});
	}
}
export default promiseError;
