/**
 * 
 * 测试公众号相关的路由
 * 
 */
const express = require("express");
const router = express.Router();
const Util = require("../common/Util");
const parseString = require("xml2js").parseString;
const ejs = require("ejs");
const tokenStr = "lckweixin";
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const uzip = require("unzip");
// const db = require("../db/index");
let upload = multer({
    dest: "../upload/"
})
const fs = require("fs");
const Token = require("../utils/Token");
const MessageController = require("../controller/MessageController");

// let logger = Util.getLogger();
/**
 * 
 * 接收微信公众号服务器的post消息
 * 
 */
router.post("/getMessage",(req,res) => {
    let logger = Util.getLogger();
    let buffer = [];
    req.on("data",(data) => {
        buffer.push(data);
    })
    req.on("end",() => {
        let msgXml = Buffer.concat(buffer).toString("utf-8");
        parseString(msgXml,{explicitArray: false},(err,result) => {
            if(err) throw err;
            result = result.xml;
            console.log("result is ",result);
            logger.info("========result is ========",result);
            let ToUserName = result.ToUserName;
            let FromUserName = result.FromUserName;
            let CreateTime = result.CreateTime;
            let MsgType = result.MsgType;
            // let Content = result.Content;
            let MsgId = result.MsgId;

            switch(MsgType) {
                case "text":
                    break;
                case "image":
                    break;   
                case "voice":
                    break;   
                case "video":
                    break;   
            }
        })
        res.send("success");
    })
    // logger.info("<<<<<**********>>>>>> req's body is ",req.body);

});
router.get("/postMessage",(req,res) => {
    let logger = Util.getLogger();
    logger.info("============= postMessage req's body si ",req.body);
    res.send("success");
})
// 验证微信服务的token
router.get("/",(req,res) => {
    let logger = Util.getLogger();
    logger.debug("====================接收微信服务器的消息===========================");
	let params = req.query;
	let signature = params.signature;
	let echostr = params.echostr;
    let timestamp = params.timestamp;
    // signature: '50f1b474e691ccbbdcf68309b877956f0772efd3',
    // echostr: '2117337068000770030',
    // timestamp: '1565701634',
    // nonce: '1841664727' }
    let nonce = params.nonce;
    if(!signature && !echostr && !timestamp && !nonce) {
        signature = '50f1b474e691ccbbdcf68309b877956f0772efd3';
        echostr = '2117337068000770030';
        timestamp = '1565701634';
        nonce = '1841664727';
    }
    logger.info("微信给的参数为：",signature,echostr,timestamp,nonce);
    let token = tokenStr;
    let list = [token,timestamp,nonce];
    console.log("list is ",list);
    console.log("list.sort() is ",list.sort().join(""));
    let temp = list.sort().join("");
    console.log("temp is ",temp);
    let currentSign = crypto.createHash("sha1").update(temp).digest("hex");
    logger.info("当前的签名是：",currentSign);
    // 签名一直说明是微信服务器发送过来的
    if(currentSign === signature) {
        // 讲token存储起来
        Token.getToken();
        // 把微信发过来的随机字符串远样发送给它
        res.end(echostr);
    }
})
router.post("/",(req,res) => {
    let logger = Util.getLogger();
    let buffer = [];
    req.on("data",(data) => {
        buffer.push(data);
    })
    req.on("end",() => {
        let msgXml = Buffer.concat(buffer).toString("utf-8");
        parseString(msgXml,{explicitArray: false},(err,result) => {
            if(err) throw err;
            result = result.xml;
            console.log("result is ",result);
            logger.info("========result is ========",result);
            let ToUserName = result.ToUserName;
            let FromUserName = result.FromUserName;
            let CreateTime = result.CreateTime;
            let MsgType = result.MsgType;
            // let Content = result.Content;
            let MsgId = result.MsgId;

            switch(MsgType) {
                case "text":
                    let content = result.Content;
                    MessageController.getInstance().handleMessage(MsgType,ToUserName,FromUserName,content,res);
                    console.log("content is ",content);
                    break;
                case "image":
                    let mediaId = result.MediaId;
                    MessageController.getInstance().handleMessage(MsgType,ToUserName,FromUserName,mediaId,res);
                        // console.log("content is ",mediaId);
                    break;   
                case "voice":
                    let voiceId = result.MediaId;
                    MessageController.getInstance().handleMessage(MsgType,ToUserName,FromUserName,voiceId,res);
                    break;   
                case "video":
                    let videoId = result.MediaId;
                    MessageController.getInstance().handleMessage(MsgType,ToUserName,FromUserName,videoId,res);
                    break;   
            }
        })
        // res.send("success");
    })
})
// 上传文件UI
router.get("/upload",(req,res) => {
    let logger = Util.getLogger();
    ejs.renderFile("./views/upload.ejs",{
        msg: "上传文件"
    },(err,data) => {
        logger.info("===========>>data is ",data);
        if(err) {
            logger.error(err);
            return;
        }
        res.send(data);
    })
})
/***
 * 
 * =========================upload file===============================
 * 
 */
router.post("/upload",upload.single("fileItem"),(req,res) => {
    let logger = Util.getLogger();
    let file = req.file;
    logger.info("=========file.originalname is ",file.originalname);
    let extName = path.extname(file.originalname);
    logger.info("upload file extName is ",extName);
    let n = path.basename(file.originalname).lastIndexOf(".");
    let nstr = file.originalname.substring(0,n);
    let filename = "upload/" + nstr + extName;
    logger.info("deal upload file filename is ",filename);
    fs.exists(filename,(exists) => {
        if(!exists) {
            return;
        }
        // 删除原来的文件
        fs.unlinkSync(filename);
    })
    // 重命名
    try {
        fs.rename(file.path,filename,() => {
            console.log("重命名成功");
            if(extName === ".zip") {
                logger.info("==============extName is ",extName + "==============");
                // 开始解压
                fs.createReadStream(filename).on("error",() => {
                    console.log("解压失败");
                    res.send("compress error");
                }).on("close",() => {
                    console.log("关闭");
                    // 删除zip文件
                    fs.unlinkSync(filename);
                    logger.info("=============upload success================");
                    res.send("success");
                }).pipe(uzip.Extract({path: "upload/" + "remote-assets"}));
            }
        })
    } catch(e) {
        console.log("e is ",e);
        logger.error("upload error ",e);
    } finally {
        
    }
})
/**
 * 
 * ====================Login========================
 * 
 */
// router.post("/login",(req,res) => {
    
//     db.queryUser();
// })
module.exports = router;