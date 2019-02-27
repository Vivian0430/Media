var video=require("../models/video.js");
var music=require("../models/music.js");
var picture=require("../models/picture.js");
var user=require("../models/user.js");
var super01=require("../models/super.js");
var formidable=require("formidable");

exports.showIndex=function(req,res){
   res.render("index");
}
exports.showMore=function(req,res){
   picture.find({},function(err,data){
      res.render("more",{data,data})
   })
}

exports.showVip=function(req,res){
   picture.find({},function(err,data){
      res.render("vip")
   })
}

exports.showVipMore=function(req,res){
   picture.find({},function(err,data){
      res.render("vipMore",{data,data})
   })
}

exports.showVideoMore=function(req,res){
   video.find({}, function(err, data) { 
		res.render("videoMore", {data:data});
	})
  
}
exports.showMusicMore=function(req,res){
   music.find({},function(err,data){
      // console.log(data);
      res.render("musicMore",{data,data});
   })
  
}
exports.showVideoDetail=function(req,res){
   res.render("videoDetail");
}
exports.showAdminLogin=function(req,res){
   var fields={
      title:"",
      password:""
   }
   res.render("adminLogin",{fields,fields});
}

exports.showMyLogin=function(req,res){
   res.render("myLogin");
}


exports.showAdmin=function(req,res){
   var dataArr=new Object;
   video.find({},function(err,data){
      dataArr.video=data;
   })

   music.find({},function(err,data){
      dataArr.music=data;
   })

   picture.find({},function(err,data){
      dataArr.picture=data;
   })

   user.find({},function(err,data){
      
      dataArr.user=data;
   })
   
  setTimeout(() => {
   res.render("admin",{dataArr,dataArr});
  }, 2000);
  
}

exports.showAdmin02=function(req,res){
   var dataArr=new Object;
   video.find({},function(err,data){
      dataArr.video=data;
   })

   music.find({},function(err,data){
      dataArr.music=data;
   })

   picture.find({},function(err,data){
      dataArr.picture=data;
   })

   user.find({},function(err,data){
      
      dataArr.user=data;
   })

   super01.find({},function(err,data){
      
      dataArr.super=data;
   })
   
  setTimeout(() => {
   res.render("admin02",{dataArr,dataArr});
  }, 2000);
}

exports.showRegister=function(req,res){
   res.render("register");
}


exports.deleteProduct = function(req, res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
      console.log(fields)
      var dbClass=fields.productClass;
      console.log(dbClass)
      var obj={
         "title":fields.title
      }
      if(dbClass=="video"){
         video.find(obj, function(err, data) {
            console.log(data);
            data[0].remove();
            res.json({code:0})
         })            
      }else if(dbClass=="music"){
         music.find(obj, function(err, data) {
            console.log(data);
            data[0].remove();
            res.json({code:0})
         }) 
      }else if(dbClass=="picture"){
         picture.find(obj, function(err, data) {
            console.log(data);
            data[0].remove();
            res.json({code:0})
         }) 
      }else if(dbClass=="user"){
         user.find(obj, function(err, data) {
            console.log(data);
            data[0].remove();
            res.json({code:0})
         }) 
      }
		
	})
}

exports.deleteSuper = function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
      console.log(fields)
      super01.find(fields, function(err, data) {
         console.log(data);
         data[0].remove();
         res.json({code:0})
      }) 
	})
}

exports.updataProduct = function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
      console.log(fields)
      var dbClass=fields.productClass;
      console.log(dbClass);
      if(dbClass=="video"){
         console.log("0");
         video.updataVideo(fields, function(result) {
            console.log("1");
            if(result==1){
               res.json({code:1});
            }else if(result==-2){
               res.json({code:-2})
            }
         });  
              
      }else if(dbClass=="music"){
         music.updataMusic(fields, function(result) {
				if(result==1){
               res.json({code:1});
            }else if(result==-2){
               res.json({code:-2})
            }
			});
      }else if(dbClass=="picture"){
         picture.updataPicture(fields, function(result) {
				if(result==1){
               res.json({code:1});
            }else if(result==-2){
               res.json({code:-2})
            }
			});
      }
		
	})
}



exports.updataPassword = function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
      console.log(fields);
      super01.updataMyPassword(fields, function(result) {
         console.log("1");
         if(result==1){
            res.json({code:1});
         }else if(result==-2){
            res.json({code:-2})
         }
      }); 
		
	})
}


exports.updataUser = function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
      console.log(fields);
      user.updataVip(fields, function(result) {
         console.log("1");
         if(result==1){
            res.json({code:1});
         }else if(result==-2){
            res.json({code:-2})
         }
      }); 
		
	})
}


exports.addProduct = function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
      console.log(fields)
      var dbClass=fields.productClass;
      console.log(dbClass)
      if(dbClass=="video"){
         video.insertVideo(fields, function(result) {
				if(result==1){
               res.json({code:1});
            }else if(result==-2){
               res.json({code:-2})
            }
			});         
      }else if(dbClass=="music"){
         music.insertMusic(fields, function(result) {
				if(result==1){
               res.json({code:1});
            }else if(result==-2){
               res.json({code:-2})
            }
			});
      }else if(dbClass=="picture"){
         picture.insertPicture(fields, function(result) {
				if(result==1){
               res.json({code:1});
            }else if(result==-2){
               res.json({code:-2})
            }
			});
      }
		
	})
}

exports.addSuper = function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
      super01.insertSuper(fields, function(result) {
         if(result==1){
            res.json({code:1});
         }else if(result==-2){
            res.json({code:-2})
         }
      });  
		
	})
}


exports.findProduct = function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
      console.log(fields)
      console.log(fields.title)
      var dbClass=fields.productClass;
      console.log(dbClass)
      var reg =new RegExp( fields.title ,"g"); // re为/^\d+bl$/gim
      if(dbClass=="video"){
         video.find({title:reg}, function(err,data) {
				res.json(data);
			});         
      }else if(dbClass=="music"){
         music.find({"title":reg}, function(err,data) {
				res.json(data);
			}); 
      }else if(dbClass=="picture"){
         picture.find({"title":reg}, function(err,data) {
				res.json(data);
			}); 
      }
		
	})
}








exports.sendUserInfo = function(req, res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
      
      fields.vip=false;
      // console.log(fields);
      if(fields) {
			user.insertUser(fields, function(result) {
				console.log(result);
			});
		}
      res.render("adminLogin",{fields,fields});
	})
}

exports.findUser = function(req, res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
      console.log(fields);
      user.find(fields,function(err,data){
         res.json({data:data});
      })
	})
}


exports.findSuper = function(req, res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
      console.log(fields);
      super01.find(fields,function(err,data){
         res.json({data:data});
      })
	})
}


exports.checkUser = function(req, res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
      
      console.log(fields);
      user.find(fields,function(err,data){
         console.log(data.length);
         res.json({data:data});
      })
	})
}
