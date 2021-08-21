import Vue from "vue";
import App from "./App.vue";
import Monitor from '../../../monitor/index'
// import Monitor from "../../../monitor/sdk";
Vue.config.productionTip = false;
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:9999";
Vue.prototype.$ajax = axios;


new Monitor({
	baseUrl:"http://127.0.0.1:3031/api",
	testMode:true,
	consoleError:true,
	app_id:"fun",
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




