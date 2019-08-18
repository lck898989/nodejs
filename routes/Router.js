const RandomManager = require("../utils/RandomManager.js");
const Util = require("../common/Util");
const logger = Util.logger;
function backAward() {
    let randomResult = RandomManager.getInstance().getRandomByChance();
    console.log("randomResult is ",randomResult);
    return randomResult;
}
function backInfo() {

}
module.exports = {
    backAward : backAward,
    backInfo  : backInfo
}