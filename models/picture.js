var mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost/media");

var PictureSchema = new mongoose.Schema({
    title:String,
    imgSrc:String,
});
PictureSchema.statics.insertPicture=function(json,callback){
    var picture=new Picture(json);
    picture.save(function(err){
        if(err){
            callback(-2);
            return;
        }
        callback(1);
    });
}


PictureSchema.statics.updataPicture = function (json, callback) {
    var id=json.id;
    console.log(id)
    this.find({"_id":id},function(err,results){
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
        console.log(results);
        var data=results[0];
        data.title=json.title;
        data.imgSrc=json.imgSrc;

        data.save();

    })

}


var Picture=mongoose.model("Picture",PictureSchema);
// var picture01 = new Picture({
//     title:"天池",
//     imgSrc:"https://good.mynatapp.cc/picture/picture01.jpg",
// })
// var picture02 = new Picture({
//     title:"阳光",
//     imgSrc:"https://good.mynatapp.cc/picture/picture02.jpg",
// })
// var picture03 = new Picture({
//     title:"夕阳",
//     imgSrc:"https://good.mynatapp.cc/picture/picture03.jpg",
// })
// var picture04 = new Picture({
//     title:"西湖",
//     imgSrc:"https://good.mynatapp.cc/picture/picture04.jpg",
// })
// var picture05 = new Picture({
//     title:"海岛",
//     imgSrc:"https://good.mynatapp.cc/picture/picture05.jpg",
// })
// var picture06 = new Picture({
//     title:"太湖",
//     imgSrc:"https://good.mynatapp.cc/picture/picture06.jpg",
// })
// var picture07 = new Picture({
//     title:"黄山",
//     imgSrc:"https://good.mynatapp.cc/picture/picture07.jpg",
// })
// var picture08 = new Picture({
//     title:"寒泉",
//     imgSrc:"https://good.mynatapp.cc/picture/picture08.jpg",
// })
// var picture09 = new Picture({
//     title:"雪峰",
//     imgSrc:"https://good.mynatapp.cc/picture/picture09.jpg",
// })
// var picture10 = new Picture({
//     title:"巨鳄",
//     imgSrc:"https://good.mynatapp.cc/picture/picture10.jpg",
// })



// picture01.save();
// picture02.save();
// picture03.save();
// picture04.save();
// picture05.save();
// picture06.save();
// picture07.save();
// picture08.save();
// picture09.save()
// picture10.save();


module.exports = Picture;
