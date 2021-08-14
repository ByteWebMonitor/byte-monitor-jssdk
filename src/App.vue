<template>
	<div id="app">
		<div v-for="str in datas" :key="str">
			<img alt="Vue logo" src="./assets/logo.png" />
			<HelloWorld msg="Welcome to Your Vue.js App" />
		</div>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	data(){
		return{
			datas:['1','2','3','3','3','3','3','3','3','3','3','3','3']
		}
	},
	components: {
		HelloWorld,
	},
	created() {
		// test1
		this.$ajax
			.post("api/x")
			.then((response) => {
				// console.log(response);
			}).catch((response) => {
				// console.log(response);
			});
		// test2
		// this.$ajax
		// 	.post("api/success")
		// 	.then((response) => {
		// 		// console.log(response);
		// 	}).catch((response) => {
		// 		// console.log(response);
		// 	});

	},
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
