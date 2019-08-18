function RandomManager() {
    this.__instance;
}
// 随机数管理类
RandomManager.getInstance = function() {
    if(!this.__instance) {
        this.__instance = new RandomManager();
    }
    return this.__instance;
}
// 根据概率生成随机数
RandomManager.prototype.getRandomByChance = function() {
    let random = Math.random();
    let control = -1;
    if(random < 0.1) {
        control = 0;
    } else if(random >= 0.1 && random < 0.15) {
        control = 1;
    } else if(random >= 0.15 && random < 0.18) {
        control = 2;
    } else if(random >= 0.18 && random < 0.2) {
        control = 3;
    } else if(random >= 0.2 && random < 0.25) {
        control = 4;
    } else if(random >= 0.25 && random < 0.3) {
        control = 5;
    } else if(random >= 0.3 && random < 0.39) {
        control = 6;
    } else if(random >= 0.39 && random < 0.45) {
        control = 7;
    } else if(random >= 0.45 && random < 0.6) {
        control = 8;
    } else if(random >= 0.6 && random < 0.65) {
        control = 9;
    } else if(random >= 0.65 && random < 0.85) {
        control = 10;
    } else {
        control = 11;
    }
    return control;
}
module.exports = RandomManager;