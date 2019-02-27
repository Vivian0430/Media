var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/media");

var MusicSchema = new mongoose.Schema({
    title:String,
    imgSrc:String,
    musicSrc:String,
    videoSrc:String
    
});

MusicSchema.statics.insertMusic = function (json, callback) {
    var user = new Music(json);
    user.save(function (err) {
        if (err) {
            callback(-2);  //服务器错误
            return;
        }
        //发回1这个状态
        callback(1);
    });

}

MusicSchema.statics.updataMusic = function (json, callback) {
  
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
        data.musicSrc=json.musicSrc;
        data.videoSrc=json.videoSrc;

        data.save();

    })

}


var Music = mongoose.model("Music", MusicSchema);

// var music1 = new Music({
//     title:"Make it count-chen",
//     imgSrc:"https://good.mynatapp.cc/images/music01.jpg",
//     musicSrc:"https://good.mynatapp.cc/music/Make-It-Count.mp3",
//     videoSrc:"https://good.mynatapp.cc/video/music01.mp4"
    
// })
// var music2 = new Music({
//     title:"起风了",
//     imgSrc:"https://good.mynatapp.cc/images/music02.jpg",
//     musicSrc:"https://good.mynatapp.cc/music/起风了.mp3",
//     videoSrc:"https://good.mynatapp.cc/video/music02.mp4"
    
// })
// var music3 = new Music({
//     title:"下坠",
//     imgSrc:"https://good.mynatapp.cc/images/music03.jpg",
//     musicSrc:"https://good.mynatapp.cc/music/下坠.mp3",
//     videoSrc:"https://good.mynatapp.cc/video/music03.mp4"
// })
// var music4 = new Music({
//     title:"年少有为",
//     imgSrc:"https://good.mynatapp.cc/images/music04.jpg",
//     musicSrc:"https://good.mynatapp.cc/music/年少有为.mp3",
//     videoSrc:"https://good.mynatapp.cc/video/music04.mp4"
// })

// music1.save();
// music2.save();
// music3.save();
// music4.save();


module.exports = Music;
