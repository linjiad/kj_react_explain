class Constant {
    constructor() {
        this.metadataIp= "49.4.6.42:32000";
        this.insertSelectiveTest = {
            url: this.getPost(this.metadataIp,"/v1/api/list/page"),
            author: "zhuangyea",
            name: "接口配置测试"
        };
    }
    getPost(ip,url) {
        return `http://${ip}${url}`;
    }
    getGet(ip,url) {
        return `http://${ip}${url}`;
    }
}

export default { Constant };
