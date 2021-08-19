
function ajax(options) {
   // 默认创建一个对象；
   let defaults = {
       url:options.url,
       type:"POST",
       async:true,
       cache:true,
       data:options.data,
       success:(data)=>{console.log(data);}
   };
   let  xhr = new  XMLHttpRequest();

   xhr.open("POST", defaults.url, true);
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.send(JSON.stringify(defaults.data));// send的参数是请求体；
}
export {ajax}
   // onreadystatechange
   // xhr.onreadystatechange = function () {
   //    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
   //        defaults.success(JSON.parse(xhr.responseText))
   //    }
   // }