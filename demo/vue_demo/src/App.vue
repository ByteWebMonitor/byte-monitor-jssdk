<template>
	<div id="app">
		<img alt="logo" src="http://funx.site/resource/junk/a.jpg" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<img alt="logo" src="https://pic.xiaohuochai.site/blog/chromePerformance2_error.png" />
		<div v-for="str in datas" :key="str">
			<img alt="Vue logo" src="./assets/logo.png" />
			<HelloWorld msg="Welcome to Your Vue.js App" />
			a
		</div>
		
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	data(){
		return{
			datas:['1','2','3']
		}
	},
	components: {
		HelloWorld,
	},
	created() {
		this.$ajax
			.post("/BuCunZai")
			.then((response) => {
				// console.log(response);
			}).catch((response) => {
				// console.log(response);
			});
		// test1
		
		// test2
		

	},
	mounted(){
		this.$ajax
			.post("api/x")
			.then((response) => {
				// console.log(response);
			}).catch((response) => {
				// console.log(response);
			});
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
