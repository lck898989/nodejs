const UserManager = require("../utils/UserManager");
// 球球游戏的数据库配置文件
const dbconfig = {
    host: "localhost",
    user: "root",
    pwd : "lck8989",
    db  : "qq"
}
const mysql = require("mysql");
let mysqlConnection = mysql.createConnection(dbconfig);
// 链接数据库
mysqlConnection.connect();
const DB = {};
DB.createUser =async function(callback) {
    // 查询该用户是否存在
    let nickname = UserManager.getInstance().createUser();
    let queryRes = await DB.queryUser(nickname);
    console.log("queryRes is ",queryRes);
    mysqlConnection.query("insert into user ")
}
DB.queryUser = function(username) {
    let sql = "select * from user where nickname=" + username;
    if(!username) {
        return null;
    }
    return new Promise((resolve,reject) => {
        mysqlConnection.query(sql,(err,results,fields) => {
            if(err) {
                reject(err);
            } 
            resolve(results);
        })
    })
}
module.exports = DB;

