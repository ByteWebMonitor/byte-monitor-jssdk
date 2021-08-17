/**
 * 查找obj数组内部 是否有obj的attrName与给定的相匹配
 * @param {Object} obj 用于匹配的对象
 * @param {String} attrName 匹配对象内部字段
 * @returns 匹配正确，返回索引；匹配失败，返回-1
 */
Array.prototype.indexOfAttr = function(obj, attrName){
    var index = -1
    this.forEach((val, i)=>{
        if(val[attrName]===obj[attrName]){
            index = i
            return
        }
    })
    return index
};

function randomString(len) {
    len = len || 10;
    var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
    var maxPos = chars.length;
    var pwd = "";
    for (let i = 0; i < len; i++) {
        pwd = pwd + chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd
}

function markUser() {
    let psMarkUser = sessionStorage.getItem("ps_markUser") || "";
    if (!psMarkUser) {
        psMarkUser = randomString();
        sessionStorage.setItem("ps_markUser", psMarkUser);
    }
    return psMarkUser;
}

function markUv() {
    const date = new Date();
    let psMarkUv = localStorage.getItem("ps_markUv") || "";
    const datatime = localStorage.getItem("ps_markUvTime") || "";
    const today = date;
    if ((!psMarkUv && !datatime) || date.getTime() > datatime * 1) {
        psMarkUv = randomString();
        localStorage.setItem("ps_markUv", psMarkUv);
        localStorage.setItem("ps_markUvTime", new Date(today).getTime());
    }
    return psMarkUv;
}
export {markUv, markUser}