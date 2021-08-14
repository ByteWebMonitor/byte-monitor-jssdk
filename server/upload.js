const express = require("express");
const router = express.Router();
router.post("/api/success", (req, res) => {
   console.log('接收到/api/success')
   res.send({data:"ok"})
})
router.post("", (req, res) => {
   console.log(req.body)
   res.send({data:"print ok"})
})
router.post("/api/fail", (req, res) => {
   res.status(404).send({msg:"sorry"})
})
module.exports = router;