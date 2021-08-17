
### 运行
1.运行Vue项目的测试网页
>```npm run serve```

2.运行普通项目的测试网页
>```./test/index.html```

3.运行本地后台（务必）
>```npm run api```

4.打包monitor
>```npm run pack```

### 普通用户如何使用产品
只需引入js文件后添加
```js
new Monitor({app_id: ''})
```

## 未知点
1. resourceError和Error触发过程
1. performance在"load"事件后timing依旧为负数

### todo list
1. **更详细的报错信息**
1. 正则过滤axios的消息



