var express=require("express");
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/media");
var mainController=require("./controller/mainController");
var app=express();
// 设置模板引擎
app.set('view engine','ejs');

// 路由的配置
app.get("/",mainController.showIndex);
app.get("/vip",mainController.showVip);
app.get("/more",mainController.showMore);
app.get("/vipMore",mainController.showVipMore);
app.get("/musicMore",mainController.showMusicMore);
app.get("/videoMore",mainController.showVideoMore);
app.get("/videoDetail",mainController.showVideoDetail);
app.get("/adminLogin",mainController.showAdminLogin);
app.get("/myLogin",mainController.showMyLogin);
app.get("/admin",mainController.showAdmin);
app.get("/admin02",mainController.showAdmin02);

app.get("/register",mainController.showRegister);

app.post("/deleteProduct",mainController.deleteProduct);
app.post("/deleteSuper",mainController.deleteSuper);

app.post("/addProduct",mainController.addProduct);
app.post("/addSuper",mainController.addSuper);


app.post("/updataProduct",mainController.updataProduct);
app.post("/updataPassword",mainController.updataPassword);

app.post("/findProduct",mainController.findProduct);
app.post("/updataUser",mainController.updataUser);

app.post("/sendUserInfo",mainController.sendUserInfo);
app.post("/findUser",mainController.findUser);
app.post("/findSuper",mainController.findSuper);

app.post("/checkUser",mainController.checkUser);

// 静态文件的引用
app.use(express.static(__dirname + '/public'));

//端口的监听
app.listen("8088");
console.log("多媒体启动成功");