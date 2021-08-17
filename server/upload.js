const express = require("express");
const router = express.Router();


router.post("/api/uploadDevice", (req, res) => {
   console.log('/api/uploadDevice');
   console.log(req.body)
   res.send({data:"print ok"})
})
router.post("/api/uploadPerformance", (req, res) => {
   console.log('/api/uploadPerformance');
   console.log(req.body)
   res.send({data:"print ok"})
})
router.post("/api/x", (req, res) => {
  
   res.status('404').send('s')
})















router.post("/api/fail", (req, res) => {
   res.status(404).send({msg:"sorry"})
})
router.post("/api/success", (req, res) => {
   console.log('接收到/api/success')
   res.send({data:"ok"})
})
module.exports = router;