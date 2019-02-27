var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/media");
var VideoSchema = new mongoose.Schema({
    title:String,
    imgSrc:String,
    videoSrc:String
    
});

VideoSchema.statics.insertVideo = function (json, callback) {
    var video = new Video(json);
    video.save(function (err) {
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
    });

}

VideoSchema.statics.updataVideo = function (json, callback) {
    console.log("2")
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
        data.videoSrc=json.videoSrc;

        data.save();

    })

}







var Video = mongoose.model("Video", VideoSchema);

// var video0 = new Video({
//     title:"一团火",
//     imgSrc:"https://good.mynatapp.cc/images/video00.jpg",
//     videoSrc:"https://good.mynatapp.cc/video/video00.mp4"
    
// })
// var video1 = new Video({
//     title:"冰山一角",
//     imgSrc:"https://good.mynatapp.cc/images/video01.jpg",
//     videoSrc:"https://good.mynatapp.cc/video/video01.mp4"
    
// })
// var video2 = new Video({
//     title:"简约家装",
//     imgSrc:"https://good.mynatapp.cc/images/video02.jpg",
//     videoSrc:"https://good.mynatapp.cc/video/video02.mp4"
// })
// var video3 = new Video({
//     title:"香港",
//     imgSrc:"https://good.mynatapp.cc/images/video03.jpg",
//     videoSrc:"https://good.mynatapp.cc/video/video03.mp4"
// })

//  video0.save();
//  video1.save();
//  video2.save();
//  video3.save();

module.exports = Video;
