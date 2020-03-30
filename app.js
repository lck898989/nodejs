const express = require("express");
const log4js = require("log4js");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Util = require("./common/Util");
const messageRouter = require("./routes/getMessageByPost");
const fs = require("fs");
log4js.configure({
    appenders: {
        cheese: {
            type: "dateFile",
            filename: "logs/cheese",
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            category: "normal",
            maxLogSize: 1024 * 1024,
        }
    },
    categories: {
        default: {
            appenders: ["cheese"],
            /**
 *              * 高于我们自己设置的都会输出到对应文件中去
 *                           */
            level: "trace"
        }
    }
})
const logger = log4js.getLogger("normal");
Util.logger = logger;
app.use(log4js.connectLogger(log4js.getLogger("normal"),{level: log4js.levels.INFO}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/message",messageRouter);
app.use("/web",express.static(path.join(__dirname,"public")));
app.use("/game",express.static(path.join(__dirname,"game")));
app.use("/egret-game",express.static(path.join(__dirname,"egret-game")));
app.use("/linegame",express.static(path.join(__dirname,"linegame")));
app.use("/remote-assets",express.static(path.join(__dirname,"upload/remote-assets")));
app.use("/onetwosteps/3d/",express.static(path.join(__dirname,"oneTwoStep3D")));
app.use("/movingup",express.static(path.join(__dirname,"movingupgame")));

app.all("*",(req,res,next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","content-type");
                 //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else 
      next();
});
app.listen(8081,()=> {
	console.log("app is running on port 8080");
})
