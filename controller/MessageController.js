const Token = require("../utils/Token");
const Util = require("../common/Util");
const http = require("https");
const MessageFactory = require("../utils/MessageFactory");
let MessageController = function() {
    this.instance = null;
}
MessageController.getInstance = function() {
    if(!this.instance) {
        this.instance = new MessageController();
        return this.instance;
    }
    return this.instance;
}
// 处理微信公众号传递过来的消息
/**
 * @param  {string} messageType 
 * @param  {string} toUsername
 * @param  {string} fromUsername
 * @param  {string} message
 * @param  {} res 相应信息
 */
MessageController.prototype.handleMessage = async function(messageType,toUsername,fromUsername,message,res) {
    let logger = Util.getLogger();
    logger.info("======消息到达消息门服务器=======");
    let token = await Token.getToken();
    try {
        let messagestr = MessageFactory.createMessage(messageType,toUsername,fromUsername,message);
        res.send(messagestr);
    } catch(e) {
        console.log("发送信息失败",e);
        logger.error("发送信息失败");
    }
}
module.exports = MessageController;