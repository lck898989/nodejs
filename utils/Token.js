const Token = {};
const https = require("https");
const Util = require("../common/Util");
const appId = "wxe2c1a40c4388c168";
const scret = "ff1665bc631697f2cfd8ad582779f0c8";
// 测试号
const devAppId = "wx8a6b8711c8a2f9a7";
const devScret = "097ebf7b93d510096507efc72dbd53e3";
Token.token = {
    "access_token": "",
    "expires_in": 0
};
(function(obj){
    console.log("obj is ",obj);
    if(!obj.DEBUG) {
        Token.token.access_token = "";
        Token.token.expires_in = 0;
    } else if(obj.DEBUG) {
        Token.token.access_token = "";
        Token.token.expires_in = 0;
    }
})(Util.MODEL)
// 获取token接口
Token.getToken = function() {
    console.log("Util's Model is ",Util.MODEL);
    let self = this;
    let time = new Date().getTime();
    if(Token.token.expires_in < time || Token.token.access_token === "") {
        let url;
        if(Util.MODEL.DEBUG) {
            url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${devAppId}&secret=${devScret}`;
        } else if(Util.MODEL.RELEASE){
            url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${scret}`;
        }
        return new Promise((reso,rect) => {
            https.get(url,async (res) => {
                if(res) {
                    sx = await new Promise((resolve,reject) => {
                        res.on("data",(d) => {
                            console.log("d is ",d,typeof d);
                            process.stdout.write(d);
                            let bufferString = JSON.stringify(d);
                            let bufferData = JSON.parse(bufferString);
                            let buffer = new Buffer.from(bufferData);
                            let data = buffer.toString();
                            sx = JSON.parse(data);
                            resolve(sx);
                        })
                    });
                    console.log("sx is ",sx);
                    Token.token.access_token = sx.access_token;
                    Token.token.expires_in = new Date().getTime() + (parseInt(sx.expires_in) - 200) * 1000;
                    reso(Token.token.access_token);
                }
            });
        })
    } else {
        return Token.token.access_token;
    }
}
// 设置token信息
Token.setToken = function(token) {
    Token.token = token;
    console.log("设置之后的token是：",Token.token);
}
module.exports = Token;
