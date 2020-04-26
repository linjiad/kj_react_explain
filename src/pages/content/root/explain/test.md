## constant.js说明

在constant中配置
````js
class Constant {
    constructor() {
        this.ipConfig= "127.0.0.1:8080";
        this.apiConfig = {
            url: this.getPost(this.ipConfig,"/api/api"),
            author: "name",
            name: "接口地址"
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
````
* this.ipConfig——配置请求的ip地址和端口号
* this.apiConfig——配置请求的路径

****

## index.js请求方法

首先引入ajax插件并设置请求头

````js
import ajax from "ajax";

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};
````

### post方法
````js
/**
 * post请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function post (data){
    const promise = new Promise((resolve, reject) => {
        ajax.post({
            url:data.url,
            headers,
            params:data.params,
            type:data.type
        }).then((resultJson) => {
            if(resultJson.code === 1){
                resolve(resultJson);
            }else if (resultJson.code === 20008){
                console.log("token过期这里需要跳转到登录页面");
                window.location.href=`${window.logInUrl}&url=http://${window.location.host}`;
            }else {
                reject(resultJson);
            }
        }).catch((errMsg) => {
            reject(errMsg);
        });
    });
    return promise;
}
````

### get方法
````js
/**
 * get请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function get (data){
    const promise = new Promise((resolve, reject) => {
        ajax.get({
            url:data.url,
            headers,
            params:data.params,
            type:data.type
        }).then((resultJson) => {
            if(resultJson.code === 1){
                resolve(resultJson);
            }else if (resultJson.code === 20008){
                console.log("token过期这里需要跳转到登录页面");
                window.location.href=`${window.logInUrl}&url=http://${window.location.host}`;
            }else {
                reject(resultJson);
            }
        }).catch((errMsg) => {
            reject(errMsg);
        });
    });
    return promise;
}
````

### del方法
````js
/**
 * del请求
 * @param {data.url} 路径
 * @param {data.params} 参数
 * @param {data.headers} 请求头
 * @return 成功或失败的值
 * */
export function del (data){
    const promise = new Promise((resolve, reject) => {
        ajax.del({
            url:data.url,
            headers,
            params:data.params,
            type:data.type
        }).then((resultJson) => {
            if(resultJson.code === 1){
                resolve(resultJson);
            }else if (resultJson.code === 20008){
                console.log("token过期这里需要跳转到登录页面");
                window.location.href=`${window.logInUrl}&url=http://${window.location.host}`;
            }else {
                reject(resultJson);
            }
        }).catch((errMsg) => {
            reject(errMsg);
        });
    });
    return promise;
}
````

****

## 代码中使用

首先引入所需的方法

````js
import {post,get,del} from "../../../../services/request/index";
`````

### get请求

type可选参数
* json问号传参
* 否则是动态路由

````js
get({
    url:url.apiConfig.url,
    params:{
        key:value,
    },
    type:"json"
}).then((resultJson) => {
    console.log(resultJson);
}).catch((errMsg) => {
   console.log(errMsg)
});
````


### post请求

type可选参数
* json传参
* form表单提交

````js
post({
    url:url.apiConfig.url,
    params:{},
    type:"json"
}).then((resultJson) => {
    console.log(resultJson)
}).catch((errMsg) => {
   console.log(errMsg)
});
````

### del请求

````js
del({
    url:url.apiConfig.url,
    params:{},
}).then((resultJson) => {
    console.log(resultJson)
}).catch((errMsg) => {
   console.log(errMsg)
});
````