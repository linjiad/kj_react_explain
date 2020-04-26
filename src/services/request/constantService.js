class Constant {
    constructor() {
    }
    getPost(ip,url) {
        return `http://${ip}${url}`;
    }
    getGet(ip,url) {
        return `http://${ip}${url}`;
    }
}

export default { Constant };
