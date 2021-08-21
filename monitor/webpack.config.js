const path = require("path");
const webpack = require('webpack')
const {version} = require('../package.json')
module.exports = {
	//devtool:'' cheap-source-map"
	//mode:打包模式
	mode: "production",
	//entry:需要打包的文件
	entry: "./monitor/entry.js",
	output: {
		// filename:指定打包后js文件的名字
		filename: `jssdk-${version}.min.js`,
		//path:指定打包后的文件放在那里
		path: path.resolve(__dirname, ""),
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
	// optimization: {
	// 	minimizer: [
	// 		new webpack.BannerPlugin({
	// 			entryOnly: true, // 是否仅在入口包中输出 banner 信息
	// 			banner: () => {
	// 				return (
	// 					`xxxxx v${version}` +
	// 					`\n` +
	// 					`Date: ${new Date()}`
	// 				);
	// 			},
	// 		}),
	// 	],
	// },
};
