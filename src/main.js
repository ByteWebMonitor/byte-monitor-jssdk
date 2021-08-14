import Vue from 'vue'
import App from './App.vue'
import Monitor from '../monitor/sdk'
Vue.config.productionTip = false
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3030';
Vue.prototype.$ajax= axios


new Monitor({
  ajaxError:true,
  jsError:true,
  isPerformance:true,
  isPage:true,
  // uploadUrl:'https://qc6p4b.fn.thelarkcloud.com/hello',
  reportUrl:'http://127.0.0.1:3030',
  name:"测试网站"
})


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

		// test3
		abcde
