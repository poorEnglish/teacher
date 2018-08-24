export default {
    isIphone(){
        var ua = window.navigator.userAgent.toLowerCase();
        return /(iPhone|iPad|iPod|iOS)/i.test(ua)
    },

    getCutLength(){
        return this.isIphone()?104:64
    },
    countNum(){
        let xhr=new XMLHttpRequest();
        xhr.open('post','count',false);
        xhr.send()
    }

}
