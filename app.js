const express = require("express");
const log4js = require("log4js");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Util = require("./common/Util");
const messageRouter = require("./routes/getMessageByPost");
const fs = require("fs");
// 微信公众号配置的token字符串

console.log("__dirname is ",__dirname);
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
console.log("Util is ",Util);
console.log("Logger is ",Util.logger);
app.use(log4js.connectLogger(log4js.getLogger("normal"),{level: log4js.levels.INFO}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/message",messageRouter);
app.use("/game",express.static(path.join(__dirname,"public")));
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
app.listen(8080,()=> {
	console.log("app is running on port 8080");
})
