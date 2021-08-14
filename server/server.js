const express = require("express");
const app = express();
app.use(require("cors")());
/*
    origin:['http://localhost:8083'],
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
*/
app.use(express.json());

app.use(require("./upload"))

app.listen(3030,'0.0.0.0', () => {
   console.log("success");
});








































// Array.prototype.hasString = function(e){
//    this.forEach((v)=>{
//       if(v==e) return true;
//    })
//    return false;
// }
//最初版本的遍历评论树，现已废弃
// String.prototype.len = function() {
//    var len = 0;--
//    for (var i=0; i<this.length; i++) {
//        if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
//             len += 2;
//         } else {
//             len ++;
//         }
//     }
//    return len;
// }
/**/
// app.post("/api/getReviews", (req, res) => {
//    Review.find({ article_id: req.body.article_id,dad_id:""})
//       .sort({ time: -1 })
//       .exec(function(err, data) {
//          var ary = [];
//          async function getUser(i) {
//             let obj = {
//                body: i.body,
//                time: getFuzzyTime(i.time)
//             };
//             await User.find({ _id: i.user_id }, (err, data_u) => {
//                let user = data_u[0].user;
//                let avatar = data_u[0].avatar;
//                obj.user = user;
//                obj.avatar = avatar;
//             });
//             return obj;
//          }
//          (async function getAllUser() {
//             for (let i of data) {
//                await getUser(i).then(obj => {
//                   ary.push(obj);
//                });
//             }
//             res.send({ success: 1, reviews: ary });
//          })();
//       });
// });
////////////////////
// {
//    Review.find({ article_id: req.body.article_id})
//       .sort({ time: -1 })
//       .exec(function(err, data) {
//          var ary = [];
//          //函数：异步await拿到数据元对象的关联信息
//          async function getUser(i) {
//             let obj = {
//                body: i.body,
//                time: Time.getFuzzyTime(i.time)
//             };
//             await User.find({ _id: i.user_id }, (err, data_u) => {
//                let user = data_u[0].user;
//                let avatar = data_u[0].avatar;
//                obj.user = user;
//                obj.avatar = avatar;
//             });
//             return obj;
//          }
//          //判断某个元对象的父级，是不是根级祖先，返回true
//          


//          //
//          (async function() {
//             for (let i of data) {
//                await getUser(i).then(obj => {
//                   ary.push(obj);
//                });
//             }
//             //在这里，已经拿到了所有根节点
//             //res.send({ success: 1, reviews: ary });
//          })();
//       });
// }
