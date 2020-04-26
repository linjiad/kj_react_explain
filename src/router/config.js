import loadable from "../services/loadable";
const APP = loadable(()=>import("../pages/content/App"));
// const RootAPP = loadable(()=>import("../pages/content/root/App"));
// const CompomemtsAPP = loadable(()=>import("../pages/content/components/App"));
// const TablePage = loadable(()=>import("../pages/content/components/table/index"));
// const PagingPage = loadable(()=>import("../pages/content/components/paging/index"));
// const NpmPage = loadable(()=>import("../pages/content/root/npm/index"));
// const ExplainPage = loadable(()=>import("../pages/content/root/explain/index"));
// const InstallPage = loadable(()=>import("../pages/content/root/install/index"));
//组件 -----------------------------------------------------------------------------------------------------------------
import ComponentsAPP from "../pages/content/components/App";
import TextPage from "../pages/content/components/wordText";
import IconPage from "../pages/content/components/icon";
import TablePage from "../pages/content/components/table/index";
import PagingPage from "../pages/content/components/paging/index";
import InputPage from "../pages/content/components/input/index";
import TextArea from "../pages/content/components/textArea/index";
import SelectPage from "../pages/content/components/select/index";
import DatePicker from "../pages/content/components/datePicker/index";
import ButtonPage from "../pages/content/components/button/index";
import Transfer from "../pages/content/components/transfer/index";
import UpLoadFile from "../pages/content/components/upLoadFile/index";
import TabsPage from "../pages/content/components/tabs/index";
import FormPage from "../pages/content/components/form";
import Breadcrumb from "../pages/content/components/breadcrumb/index";
import Loading from "../pages/content/components/Loading/index";
import Tooltip from "../pages/content/components/Tooltip/index";
import Popconfirm from "../pages/content/components/Popconfirm/index";
import Menu from "../pages/content/components/menu";
import MessageBox from  "../pages/content/components/messageBox";
import Message from "../pages/content/components/message";
import NotificationPage from "../pages/content/components/notification";
//框架 -----------------------------------------------------------------------------------------------------------------
import RootAPP from "../pages/content/root/App";
import IntroductionPage from "../pages/content/root/introduction/index";
import NpmPage from "../pages/content/root/npm/index";
import ExplainPage from "../pages/content/root/explain/index";
import InstallPage from "../pages/content/root/install/index";
import Router from "../pages/content/root/router/index";
import {Component} from "react";
class RouterConfig extends Component {
    constructor(){
        super();
        this.config = [
            {path : "/", name : "首页", component : APP, check : false, exact:true},
            {path : "/root", name : "框架", component : RootAPP, check : false,
                routes : [
                    {path : "/root/introduction", name : "简介", component : IntroductionPage, check : false},
                    {path : "/root/npm", name : "npm私服管理", component : NpmPage, check : false},
                    {path : "/root/explainPage", name : "框架说明", component : ExplainPage, check : false},
                    {path : "/root/installPage", name : "框架安装", component : InstallPage, check : false},
                    {path : "/root/router", name : "框架路由", component : Router, check : false},
                ]
            },
            {path : "/components", name : "组件", component : ComponentsAPP, check : false,
                routes : [
                    //Basic ---------------------------------------------------------------------------------------------
                    {path : "/components/text", name : "文字说明", component : TextPage, check : false},
                    {path : "/components/icon", name : "图标", component : IconPage, check : false},
                    {path : "/components/button", name : "button组件", component : ButtonPage, check : false},
                    //From ---------------------------------------------------------------------------------------------
                    {path : "/components/table", name : "table组件", component : TablePage, check : false},
                    {path : "/components/pagingPage", name : "分页组件", component : PagingPage, check : false},
                    {path : "/components/input", name : "input组件", component : InputPage, check : false},
                    {path : "/components/textArea", name : "textArea组件", component : TextArea, check : false},
                    {path : "/components/select", name : "select组件", component : SelectPage, check : false},
                    {path : "/components/datePicker", name : "datePicker", component : DatePicker, check : false},
                    {path : "/components/transfer", name : "穿梭框", component : Transfer, check : false},
                    {path : "/components/upLoadFile", name : "上传组件", component : UpLoadFile, check : false},
                    {path : "/components/tabs", name : "tabs标签页", component : TabsPage, check : false},
                    {path : "/components/form", name : "form表单", component : FormPage, check : false},
                    //Notice -------------------------------------------------------------------------------------------
                    {path : "/components/messageBox", name : "弹出窗组件", component : MessageBox, check : false},
                    {path : "/components/message",name : "信息提示",component : Message, check : false},
                    {path : "/components/notification" , name : "通知提醒框" , component : NotificationPage , check : false},
                    {path : "/components/Loading", name : "加载", component : Loading, check : false},
                    {path : "/components/Tooltip", name : "文字提示", component : Tooltip, check : false},
                    {path : "/components/Popconfirm", name : "气泡确认框", component : Popconfirm, check : false},
                    //Navigation ---------------------------------------------------------------------------------------------
                    {path : "/components/menu", name : "菜单导航", component : Menu, check : false},
                    {path : "/components/breadcrumb", name : "面包屑", component : Breadcrumb, check : false},
                ]
            },
        ];
    }
}

export default RouterConfig;
