let user = {
    nickname: "",
    score: "",
    rank : "",
    gender: "1",
    avatar: "",
}
let UserManager = function() {
    this.instance = null;
}
// 获得用户管理器
UserManager.getInstance = function() {
    if(!this.instance) {
        this.instance = new UserManager();
        return this.instance;
    } else {
        return this.instance;
    }
}
UserManager.prototype.createUser = function() {
    let userItem = {
        
    }
    userItem['nickname'] = this.createUserName();
    userItem['score'] = "0";
    userItem['rank'] = "0";
    userItem['gender'] = '1';
    userItem['avatar'] = 'https://tengcent/2.png';
    return userItem;
}
// 生成唯一的名字字符串
UserManager.prototype.createUserName = function() {
    let length = 5;
    let usernameRes = "";
    for(let i = 0; i < length; i++) {
        usernameRes += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    return usernameRes;
}
module.exports = UserManager;