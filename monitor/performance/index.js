import pagePerformance from "./performance.js";
import BaseMonitor from "../lib/base";
class Performance extends BaseMonitor {
	constructor(options) {
		super(options);
		this.config = {
			//resourceList:[], //资源列表
			performance: {}, //页面性能列表
		};
	}
	record() {
		try {
			var performance = pagePerformance.getTiming();
			let data = {
				url: window.location.href,
				redirectTime: performance.redirectTime,
				dnsTime: performance.dnsTime,
				ttfbTime: performance.ttfbTime,
				reqTime: performance.reqTime,
				loadPageTime: performance.loadPageTime,
				user_id: localStorage.getItem("ps_markUv"),
				time: new Date(),
			};
			localStorage.setItem("page_performance", JSON.stringify(data));
			this.clearPerformance();
			BaseMonitor.queueUpload();
		} catch (error) {
			console.log("性能信息上报异常", error);
		}
	}
	// let data = `当前URL为${window.location.href}`
	// data +=`重定向时间：${result.performance.redirectTime}\n`
	// data +=`DNS查询时间：${result.performance.dnsTime}\n`
	// data +=`页面资源传送时间：${result.performance.ttfbTime}\n`
	// data +=`页面加载完成时间：${result.performance.reqTime}\n`
	// data +=`用户等待总时间：${result.performance.loadPageTime}\n`


	clearPerformance() {
		if (window.performance && window.performance.clearResourceTimings) {
			performance.clearResourceTimings();
			this.config.performance = {};
			this.config.resourceList = "";
		}
	}
}

export default Performance;
