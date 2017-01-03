var express = require('express');
var router = express.Router();
var db = require('../db.js');
/* GET home page. */
router.post('/login', function(req, res, next) {
  db.findData(req.body,function(result){
    console.log(result);
    if(result===1){
      res.cookie("username",req.body.username);
      //res.cookie('username', 'aaaa', {maxAge:600000, path:'/'});
      console.log("设置cookie");
    }else if(result === -1){
      res.send()
    }
    res.send('{"result":' + result + '}');
  });



});
router.post("/register",function(req,res,next){
  db.findData(req.body.username,function(r){
    if(r === -1){
      res.send('{"result":-1}')
    }else  if(r === 0){
      db.createUser(req.body,function(err,docs){
        if(err){
          console.log(err);
          res.send('{"result":-1}');
        }else{
          res.send('{"result":1}');
        }
      });
    }else if(r === 1){
      res.send('{"result":0}')
    }
  });


});
module.exports = router;
