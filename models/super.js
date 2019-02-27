var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/media");
var SuperSchema = new mongoose.Schema({
    title: String,
    password:String,

});



SuperSchema.statics.insertSuper = function (json, callback) {
    var super01 = new Super(json);
    super01.save(function (err) {
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
    });

}

SuperSchema.statics.updataMyPassword = function (json, callback) {
    console.log(json.title);
    console.log("1")
    this.find({"title":json.title},function(err,results){
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
        console.log(results);
        var data=results[0];
        data.password=json.password;
        data.save();
    })

}


var Super = mongoose.model("Super", SuperSchema);

// var zhangsan = new Super({
//     title: "冯亮",
//     password:"123",
   
// })

// var wangwu = new Super({
//     title: "朱晓闻",
//     password:"123",
   
// })

// zhangsan.save();
// wangwu.save();


module.exports = Super;
