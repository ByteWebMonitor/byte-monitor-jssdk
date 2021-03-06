import AjaxError from "./error/ajaxError";
import jsError from "./error/jsError";
import promiseError from "./error/promiseError";
import vueError from "./error/vueError";
import resourceError from "./error/resourceError";
import Perfomance from "./performance/index";
import "./lib/extends";
import { markUser, markUv } from "./lib/extends";
const DefaultUrl = "DefaultUrl"
/**
 * 
 * @constructor
 * @param {string} title 
 */
class Monitor {
	constructor(options) {
		markUser();
		markUv();
		if (!options) options = {};
		if (typeof options.ajaxError == "undefined") options.ajaxError = true;
		if (typeof options.jsError == "undefined") options.jsError = true;
		if (typeof options.testMode == "undefined") options.testMode = false;
		if (typeof options.baseUrl == "undefined") options.baseUrl = DefaultUrl;
		// if(typeof options.vueError == "undefined") options.vueError = true
		if (typeof options.promiseError == "undefined") options.promiseError = true;
		if (typeof options.resourceError == "undefined") options.resourceError = true;
		if (typeof options.isPerformance == "undefined") options.isPerformance = true;
		if (typeof options.vue == "undefined") options.vueError = false;
		if (typeof options.consoleError == "undefined") options.consoleError = false;

		options.ajaxError && new AjaxError(options).registerError();
		options.jsError && new jsError(options).registerError();
		options.vueError && new vueError(options).registerError(options.vue);
		options.promiseError && new promiseError(options).registerError();
		options.resourceError && new resourceError(options).registerError();

		if (!options.testMode) {
			if (options.isPerformance) {
				window.addEventListener("beforeunload", () => {
					new Perfomance(options).record();
				});
			}
		} else {
			setTimeout(() => {
				new Perfomance(options).record();
			}, 2000);
		}
	}
}
export default Monitor;

//
