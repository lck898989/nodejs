let MessageFactory = function() {

}
MessageFactory.createMessage = function(messageType,toUsername,fromUser,message) {
    let res;
    let time = new Date().getTime();
    switch(messageType) {
        case "text":
            res = `<xml>
            <ToUserName><![CDATA[${fromUser}]]></ToUserName>
            <FromUserName><![CDATA[${toUsername}]]></FromUserName>
            <CreateTime>3243423424</CreateTime>
            <MsgType><![CDATA[text]]></MsgType>
            <Content><![CDATA[${message}]]></Content>
          </xml>`;
          break;
        case "image":
            res = `<xml>
            <ToUserName><![CDATA[${fromUser}]]></ToUserName>
            <FromUserName><![CDATA[${toUsername}]]></FromUserName>
            <CreateTime>12345678</CreateTime>
            <MsgType><![CDATA[image]]></MsgType>
            <Image>
              <MediaId><![CDATA[${message}]]></MediaId>
            </Image>
          </xml>`
            break;  
        case "voice":
            res = `<xml>
            <ToUserName><![CDATA[${fromUser}]]></ToUserName>
            <FromUserName><![CDATA[${toUsername}]]></FromUserName>
            <CreateTime>12345678</CreateTime>
            <MsgType><![CDATA[voice]]></MsgType>
            <Voice>
              <MediaId><![CDATA[${message}]]></MediaId>
            </Voice>
          </xml>`;
            break;
        case "video":
            res = `<xml>
            <ToUserName><![CDATA[${fromUser}]]></ToUserName>
            <FromUserName><![CDATA[${toUsername}]]></FromUserName>
            <CreateTime>12345678</CreateTime>
            <MsgType><![CDATA[video]]></MsgType>
            <Video>
              <MediaId><![CDATA[${message}]]></MediaId>
              <Title><![CDATA[title]]></Title>
              <Description><![CDATA[description]]></Description>
            </Video>
          </xml>`;
            break;


    }
    return res;
}
module.exports = MessageFactory;