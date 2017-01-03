/**
 * Created by TR0000009 on 2016/12/29.
 */
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/project0');
mongoose.connection.on("error",function(err){
    console.log(err);
});
mongoose.connection.on("open",function(){
    console.log("mongoose open");
});
var schama = new mongoose.Schema({
    username : {type : String},
    password : {type : String}
});
var Model = mongoose.model("userInfo",schama);
 module.exports.createUser = function (data,fun){
     var newUser = new Model(data);
    console.log("dbAdd:"+data.username);
     newUser.save(fun);
 };
module.exports.findData =function(data,fun){
    Model.find(data,function(err,docs){
        if(err){
            console.log("dbFindError",err);
            fun(-1)
        }else if(docs.length){
            console.log("dbFindSuccess",docs);
            fun(1);
        }else{
            fun(0);
        }
    })
} ;