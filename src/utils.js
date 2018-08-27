export default {
    isIphone(){
        var ua = window.navigator.userAgent.toLowerCase();
        return /(iPhone|iPad|iPod|iOS)/i.test(ua)
    },

    getCutLength(){
        return this.isIphone()?104:64
    },

    request(url){
        let xhr=new XMLHttpRequest();
        xhr.open('post',url,false);
        xhr.send()
    },
    //最后一页的统计
    countFinal(){
        this.request('/Statistics/Add');
    },
    //首页进来的统计
    countIndex(){
        this.request('/Statistics/Add2');
    }
}
