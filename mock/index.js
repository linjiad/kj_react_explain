const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");
const Mock = require("mockjs");
const querystring = require("querystring");
const url = require("url");

// 获取文件内容得方法
function getJsonFile(filePath) {
    const json = fs.readFileSync(path.join(__dirname,filePath),"utf-8");
    return JSON5.parse(json);
}

// 获取文件列表（所有json5得路径集合）
let components = [];
const files = fs.readdirSync(path.join(__dirname,"./json"));
files.forEach(item => {
    if(item.includes("json5")){
        components.push(`./json/${item}`);
    }else{
        const files2 = fs.readdirSync(path.join(__dirname,`./json/${item}`));
        files2.forEach(item2=> {
            if(item2.includes("json5")){
                components.push(`./json/${item}/${item2}`);
            }
        });
    }
});

// 读取json中每个list存放如集合（数据集合）
const mockList = [];
components.forEach(item=>{
    const json = getJsonFile(item);
    mockList.push(...json.list);
});

// 拦截代理请求
module.exports =  app => {
    mockList.forEach(item=>{
        switch (item.request) {
        // ——————————————————————————处理post请求——————————————————————————
        case "POST":app.post(item.url,(rep,res)=>{
            let str = "";
            rep.on("data", thunk => {
                str += thunk;
            });
            rep.on("end", ()=>{
                const queryObj = JSON.parse(str);
                console.log(queryObj);
            });
            res.json(Mock.mock(item.result));
        });
            break;
            // ——————————————————————————处理get请求——————————————————————————
        case "GET":app.get(item.url,(rep,res)=>{
            let urlObj = url.parse(rep.url);
            let query = urlObj.query;
            let queryObj = querystring.parse(query);
            console.dir(queryObj);
            res.json(Mock.mock(item.result));
        });
            break;
        default: break;
        }
    });
};
