import urlList from "./constantBase";
class Constant{
    constructor() {
        // this.ipConfig= "127.0.0.1:8080";
        this.ipConfig= window.location.host;
        for (let item in urlList){
            this[item] = {
                url: this.getPost(this.ipConfig,urlList[item].url),
                author: urlList[item].author,
                name: urlList[item].name
            };
        }
    }
    getPost(ip,url) {
        return `http://${ip}${url}`;
    }
    getGet(ip,url) {
        return `http://${ip}${url}`;
    }
}

export default { Constant };
