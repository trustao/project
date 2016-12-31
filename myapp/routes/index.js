var express = require('express');
var router = express.Router();
var db = require('../db.js');
/* GET home page. */
router.post('/login', function(req, res, next) {
  db.findData(req.body,function(result){
    console.log(result);
    if(result){
      res.cookie("username",req.body.username);
      //res.cookie('username', 'aaaa', {maxAge:600000, path:'/'});
      console.log("设置cookie");
    }
    res.send('{"result":' + result + '}');
  });



});
router.post("/register",function(req,res,next){
  db.createUser(req.body,function(err,data){
    if(err){
      console.log("aaa"+err);
    }else {
      console.log("bbb"+data);
    }
  });
console.log(req.body.username);
  res.send();
});
module.exports = router;
