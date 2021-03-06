import BaseMonitor from "../lib/base";
class Performance extends BaseMonitor {
	constructor(options) {
		super(options);
		this.config = {
			performance: {}, //页面性能列表
		};
	}
	record() {
		try {
			var performance = getTiming();
			let data = {
				url: window.location.href,
				redirectTime: performance.redirectTime,
				dnsTime: performance.dnsTime,
				ttfbTime: performance.ttfbTime,
				reqTime: performance.reqTime,
				loadPageTime: performance.loadPageTime,
				user_id: localStorage.getItem("ps_markUv"),
				app_id: this.app_id,
				time: new Date(),
			};
			localStorage.setItem("page_performance", JSON.stringify(data));
			this.clearPerformance();
			BaseMonitor.queueUpload();
		} catch (error) {
			console.log("性能信息上报异常", error);
		}
	}
	clearPerformance() {
		if (window.performance && window.performance.clearResourceTimings) {
			performance.clearResourceTimings();
			this.config.performance = {};
			this.config.resourceList = "";
		}
	}
}
export default Performance;

function getTiming() {
	try {
		if (!window.performance || !window.performance.timing) {
			console.log("你的浏览器不支持 performance 操作");
			return;
		}
		var t = window.performance.timing;
		var times = {};
		//【重要】重定向的时间
		times.redirectTime = t.redirectEnd - t.redirectStart;
		//【重要】DNS 查询时间
		times.dnsTime = t.domainLookupEnd - t.domainLookupStart;
		//【重要】读取页面第一个字节的时间
		//【原因】这可以理解为用户拿到你的资源占用的时间
		times.ttfbTime = t.responseStart - t.navigationStart;
		//【重要】内容加载完成的时间
		//【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？
		times.reqTime = t.responseEnd - t.responseStart;
		//【重要】页面加载完成的时间
		//【原因】这几乎代表了用户等待页面可用的时间
		times.loadPageTime = t.loadEventEnd - t.navigationStart;
		times.blankTime = t.domLoading - t.navigationStart;
		return times;
	} catch (e) {
		console.log(e);
	}
}
/*
            //解析dom树耗时
            times.analysisTime = (t.domComplete - t.domInteractive).toFixed(2);
            //白屏时间
            times.blankTime = (t.domLoading - t.navigationStart).toFixed(2);
            //domReadyTime
            times.domReadyTime = (t.domContentLoadedEventEnd - t.navigationStart).toFixed(2);
             //DNS 缓存时间
            times.appcacheTime = (t.domainLookupStart - t.fetchStart).toFixed(2);
            //卸载页面的时间
            times.unloadTime = (t.unloadEventEnd - t.unloadEventStart).toFixed(2);
            //tcp连接耗时
            times.tcpTime = (t.connectEnd - t.connectStart).toFixed(2);
            */
