import Vue from "vue";
import App from "./App.vue";
import Monitor from "../monitor/sdk";
Vue.config.productionTip = false;
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3030";
Vue.prototype.$ajax = axios;

new Monitor({
	// vue: Vue,
	
	isTest: true,
	app_id:"abcdabcd",
	reportUrl: "http://127.0.0.1:3030",
});

new Vue({
	render: function(h) {
		return h(App);
	},
}).$mount("#app");


new Promise((resolve, reject) => {
  setTimeout(() => reject('woops'), 500);
})
test3




