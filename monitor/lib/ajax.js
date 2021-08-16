function ajax(options) {
   // 默认创建一个对象；
   let defaults = {
      //  url:"https://qc6p4b.fn.thelarkcloud.com"+options.url,
       url:"http://127.0.0.1:3031/api"+options.url,
       type:"POST",
       async:true,
       cache:true,
       data:options.data,
       success:(data)=>{console.log(data);}
   };
   let  xhr = new  XMLHttpRequest();
   
   
   // xhr.onreadystatechange = function () {
   //    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
   //        defaults.success(JSON.parse(xhr.responseText))
   //    }
   // }
   console.log(defaults.data);
   xhr.open("POST", defaults.url, true);
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.send(JSON.stringify(defaults.data));// send的参数是请求体；
}
export {ajax}

