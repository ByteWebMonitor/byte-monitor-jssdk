import pagePerformance from "./performance.js";
import BaseMonitor from "../lib/base";
class Performance extends BaseMonitor {
    constructor(options){
        super(options);
        options.isPage = options.isPage !== false;
        this.isPage = options.isPage;
        this.config = {
            //resourceList:[], //资源列表
            performance:{}, //页面性能列表
        };
    }
    record(){
        try {
            if(this.isPage){
                this.config.performance = pagePerformance.getTiming();
            }
            if(this.isResource){
                this.config.resourceList = pagePerformance.getEntries(this.usefulType);
            }
            let result = {
                curTime:new Date().format("yyyy-MM-dd HH:mm:ss"),
                performance:this.config.performance,
                markUser:this.markUser(),
                markUv:this.markUv(),
                pageId:this.pageId,
            };
            console.log(result);
            let data = `当前URL为${window.location.href}`
            data +=`重定向时间：${result.performance.redirectTime}\n`
            data +=`DNS查询时间：${result.performance.dnsTime}\n`
            data +=`页面资源传送时间：${result.performance.ttfbTime}\n`
            data +=`页面加载完成时间：${result.performance.reqTime}\n`
            data +=`用户等待总时间：${result.performance.loadPageTime}\n`
            localStorage.setItem("page_performance",JSON.stringify(data));
            this.clearPerformance();
            BaseMonitor.queueUpload()
        } catch (error) {
            console.log("性能信息上报异常",error);
        }
    }
    randomString(len) {
    　　len = len || 10;
    　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    　　var maxPos = $chars.length;
    　　var pwd = '';
    　　for (let i = 0; i < len; i++) {
    　　　　pwd = pwd + $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return pwd + new Date().getTime();
    }
    /**
     * 获得markpage
     */
    markUser(){
        let psMarkUser = sessionStorage.getItem('ps_markUser')||'';
        if(!psMarkUser){
            psMarkUser = this.randomString();
            sessionStorage.setItem('ps_markUser',psMarkUser);
        }
        return psMarkUser;
    }
    /**
     * 获得Uv
     */
    markUv(){
        const date = new Date();
        let psMarkUv = localStorage.getItem('ps_markUv')||'';
        const datatime = localStorage.getItem('ps_markUvTime')||'';
        const today = date.format("yyyy/MM/dd 23:59:59");
        if( (!psMarkUv && !datatime) || (date.getTime() > datatime*1) ){
            psMarkUv = this.randomString();
            localStorage.setItem('ps_markUv',psMarkUv);
            localStorage.setItem('ps_markUvTime',new Date(today).getTime());
        }
        return psMarkUv;
    }
   
    clearPerformance(){
        if (window.performance && window.performance.clearResourceTimings) {
            performance.clearResourceTimings();
            this.config.performance = {};
            this.config.resourceList = '';
        }
    }

}

export default Performance;
/*
            let data = {
                ...extendsInfo,
                category:this.category,
                logType:'info',
                logInfo:JSON.stringify(result)
            };

*/