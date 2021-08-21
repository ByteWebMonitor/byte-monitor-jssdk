### 简介

`byte-monitor-jssd`是一款无侵入式的前端监控工具，可以让你轻松监控页面异常、用户性能数据以及设备数据

### 如何使用前端监控？

支持 ES6, AMD 规范及 script 标签，你可以选择一种方式引入：

```js
<script src="../node_modules/byte-monitor-jssdk/index.min.js"></script>

import Monitor from "byte-monitor-jssdk";

const MonitorJS = require("byte-monitor-jssdk");
```

然后执行以下即可

```js
new Monitor({
	app_id: "", //区分App的字符串
});
```
### 更多配置可选
```js
{
	vue: Vue  
	// 如果需要监控Vue报错，请传入Vue对象，默认为undefined
	baseUrl: "http:127.0.0.1:3031" 
	// 如果需要自定义上报api，参考下面的数据字段详解，默认为配套后端api
	testMode:true
	// 会即时上报数据，默认为关闭页面延时上报，默认为false
	consoleError:true,
	// 将上报数据即时打印到控制台，默认为false
	isPerformance:false
	// 开启性能监控，默认为true
	resourceError:false
	promiseError :false
	jsError:false
	...
}
```

### 数据字段详解

#### 1.页面错误上报

接口：`POST /api/error/upload`
示例：

```js
[
	{
		type: "js_error",
		error_info: "Uncaught ReferenceError: test3 is not defined",
		error_url: "webpack-internal:///./src/main.js",
		error_row: 35,
		error_col: 1,
		error_extra: {},
		hash: "90b4bd4993043b913af9473c5b033f1a",
		amount: 1,
		user_id: "SADiX6anG2",
		app_id: "114514114514abc",
		time: "2021-08-20T13:56:29.500Z",
	},
	{
		type: "resource_error",
		error_info: "加载IMG资源失败",
		error_url: "https://pic.xiaohuochai.site/blog/chromePerformance2_error.png",
		error_row: 0,
		error_col: 0,
		error_extra: {},
		hash: "e98e12d5e1e061869549464aa9fc1f8d",
		amount: 11,
		user_id: "SADiX6anG2",
		app_id: "114514114514abc",
		time: "2021-08-20T13:56:29.591Z",
	},
];
```

#### 2.设备数据上报

接口：`POST /api/device/upload`
示例：

```js
{
	"url":"http://192.168.0.108:8080/",  //上报的Url
	"redirectTime":0,   //重定向时间
	"dnsTime":0,    //DNS查询时间
	"ttfbTime":13,
	"reqTime":1,
	"loadPageTime":279,  //加载的总时间
	"user_id":"SADiX6anG2",
	"app_id":"114514114514abc",
	"time":"2021-08-20T13:56:31.489Z"
}
```

#### 3.性能上报

接口：`POST /api/performance/upload`
示例：

```js
{
	OS: "Windows";
	OSVersion: "10.0";
	browserInfo: "Chrome（版本: 91.0.4472.164&nbsp;&nbsp;内核: Blink）";
	deviceType: "PC";
	language: "zh_CN";
	netWork: "4g";
	orientation: "竖屏";
	screenHeight: 1080;
	screenWidth: 2560;
	time: "2021-08-20T13:56:29.488Z";
	user_id: "SADiX6anG2";
}
```

### 测试范例运行

> 前往[GitHub](https://github.com/ByteWebMonitor/byte-monitor-jssdk)下载完整测试范例

1.运行 Vue 项目的测试网页

```npm run serve```

2.运行普通项目的测试网页

```./demo/html_demo/index.html```

3.运行本地后台（务必）

```npm run api```

4.打包 monitor

```npm run pack```
