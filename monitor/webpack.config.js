const path = require("path");
module.exports = {
	//devtool:'' cheap-source-map"
	//mode:打包模式
	mode: "production",
	//entry:需要打包的文件
	entry: "./monitor/sdk.js",
	output: {
		// filename:指定打包后js文件的名字
		filename: "index.min.js",
		//path:指定打包后的文件放在那里
		path: path.resolve(__dirname, "dist"),
	},
// 	module: {        
// 		rules: [
// 			 {
// 				  test: /\.js$/,
// 				  use: {
// 						loader: 'babel-loader',
// 				  },
// 				  exclude: /node_modules/
// 			 }
// 		]
//   },
};
