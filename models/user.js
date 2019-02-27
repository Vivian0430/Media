var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/media");
var UserSchema = new mongoose.Schema({
    title: String,
    password:String,
    email:String,
    sex:String,
    vip:Boolean
});



UserSchema.statics.insertUser = function (json, callback) {
    var user = new User(json);
    user.save(function (err) {
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
    });

}

UserSchema.statics.updataVip = function (json, callback) {
    this.find({"title":json.title},function(err,results){
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
        console.log(results);
        var data=results[0];
        data.vip="true";
        data.save();

    })

}


var User = mongoose.model("User", UserSchema);

// var zhangsan = new User({
//     title: "15656180073",
//     password:"123",
//     email:"1724205587@qq.com",
//     sex:"男",
//     vip:true
// })

// var wangwu = new User({
//     title: "15656180074",
//     password:"123",
//     email:"1724205587@qq.com",
//     sex:"男",
//     vip:false
// })

// var tianniu = new User({
//     title: "15656180075",
//     password:"123",
//     email:"1724205587@qq.com",
//     sex:"男",
//     vip:false
// })
// zhangsan.save();
// wangwu.save();
// tianniu.save();

module.exports = User;
