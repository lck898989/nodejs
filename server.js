let webSocketServer = require("ws").Server
let wss = new webSocketServer({port: 8080})
wss.on("connection",(ws) => {
    console.log("client connected");
    ws.on("message",(message) => {
        console.log("message is ",message);
    })
    // ws.send({"name": "lck","age": 12})
})