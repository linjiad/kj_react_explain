import React, {Component} from "react";
import ReactDom from "react-dom";
import RouteMap from "./router";
import "antd/dist/antd.css";
import "./index.less";
import constant from "./services/request/constantService";
// 引入组件
import common from "common";
window.common = common;
// 把权限进行本次存储
// import "./services/db";
// 工具类
import Utile from "./services/utile";
const tool = new Utile();

import db from "db";
window.db = db;
//window.logInUrl = `http://192.168.74.0:8000/user/login?returnUrl=http://192.168.73.252:10006/v1/login/parseToken&id=79`;
window.logInUrl = `http://10.11.57.67:12005/user/login?returnUrl=http://10.11.57.67:11001/v1/login/parseToken&id=79`;
//window.downURL = `http://192.168.74.119:82/`;
window.downURL = `http://10.11.57.67:11502/`;
window.tool = tool;
// api接口配置10.16.126.136:8123
const url = new constant.Constant();
window.url = url;
//
const getRequest =()=>{
    const url = window.location.search; //获取url中"?"符后的字串
    let map = {};
    if (url.indexOf("?") !== -1) {
        let str = url.substr(1);
        const strs = str.split("&");
        strs.forEach((item)=>{
            map[item.split("=")[0]] = item.split("=")[1];
        });
    }
    return map;
};
// 清空菜单的DB
const dbIndex = new db.indexDB();
const menuListDB = {
    dbName:`menuList`,
    dbVersion:1,
    tableName:"menuListDB",
    mainKey:"id",
    autoIncrement: "",
    dataList:[
        {
            indexName:"id",
            indexType:"id",
            unique:false
        },
        {
            indexType:"menu",
            indexName:"menu",
            unique:true
        },
    ]
};
async function fn(){
    await dbIndex.openDB(menuListDB);
    await dbIndex.clearData("menuListDB");
    await db.setStorage("token",getRequest().token,1800000000);
    // 把username放入浏览器缓存
    await db.setStorage("userName",decodeURIComponent(getRequest().userName),1800000000);
    // 把userId放入浏览器缓存
    await db.setStorage("userId",decodeURIComponent(getRequest().userId),1800000000);
    // 把account放入浏览器缓存
    await db.setStorage("account",decodeURIComponent(getRequest().account),1800000000);
    window.location.href = "/";
}
if(getRequest().token){
    // 存储菜单结构
    fn();
    // 把token放入浏览器缓存
    // 正常页面跳转到刚才去的路径
    // window.location.href = localStorage.getItem("toUel");
    // console.log("这个验证过了"+url);
    // return true;
}
// if(!db.getStorage("token")){ // 判断是否有token
//     window.location.href=`${window.logInUrl}`;
// }
ReactDom.render(<RouteMap />,document.getElementById("root"));