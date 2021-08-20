### 如何使用前端监控？

只需引入js文件后添加
```js
new Monitor({
	app_id: "",
	baseUrl: "", //上传数据的Url
	vue: null, //如果需要Vue报错，请传入Vue对象
});
```



前往[GitHub](https://github.com/ByteWebMonitor/byte-monitor-jssdk)下载测试范例

### 测试范例运行
1.运行Vue项目的测试网页
>```npm run serve```

2.运行普通项目的测试网页
>```./demo/html_demo/index.html```

3.运行本地后台（务必）
>```npm run api```

4.打包monitor
>```npm run pack```



