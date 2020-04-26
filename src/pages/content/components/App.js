import React , {Component} from "react";
// import { HashRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import {BrowserRouter as Router , Route , Link , Redirect} from "react-router-dom";
import appLess from "./App.less";
import Menu from "../../components/LeftMenu/index";
import checkConfig from "../../../router/check";
import {CodePreviewer , MdPreviewer , PreviewLayout} from "react-code-previewer";
import test from "./textArea/test.md";

class App extends Component {
    constructor(props) {
        super(props);
        this.Check = new checkConfig();
    }

    state = {
        menuList: [
            {
                name: "Basic 基础组件" ,
                key: "01" ,
                icon: " " ,
                url: "/" ,
                list: [
                    {
                        name: "文字说明" ,
                        key: "01" ,
                        icon: " " ,
                        url: "/components/text" ,
                        list: [] ,
                    } ,
                    {
                        name: "icon 图标" ,
                        key: "02" ,
                        icon: " " ,
                        url: "/components/icon" ,
                        list: [] ,
                    } ,
                    {
                        name: "Button 按钮" ,
                        key: "03" ,
                        icon: " " ,
                        url: "/components/button" ,
                        list: [] ,
                    } ,
                ] ,
            } ,
            {
                name: "Form 表单组件" ,
                key: "01" ,
                icon: " " ,
                url: "/components/table" ,
                list: [
                    {
                        name: "Table 表格" ,
                        key: "01" ,
                        icon: " " ,
                        url: "/components/table" ,
                        list: [] ,
                    } ,
                    {
                        name: "Paging 分页" ,
                        key: "02" ,
                        icon: " " ,
                        url: "/components/pagingPage" ,
                        list: [] ,
                    } ,
                    {
                        name: "Input 输入框" ,
                        key: "03" ,
                        icon: " " ,
                        url: "/components/input" ,
                        list: [] ,
                    } ,
                    {
                        name: "TextArea 多行文本框" ,
                        key: "04" ,
                        icon: " " ,
                        url: "/components/textArea" ,
                        list: [] ,
                    } ,
                    {
                        name: "Select 下拉框" ,
                        key: "05" ,
                        icon: " " ,
                        url: "/components/select" ,
                        list: [] ,
                    } ,
                    {
                        name: "DatePicker 日期选择器" ,
                        key: "06" ,
                        icon: " " ,
                        url: "/components/datePicker" ,
                        list: [] ,
                    } ,
                    {
                        name: "Transfer 穿梭框" ,
                        key: "07" ,
                        icon: " " ,
                        url: "/components/transfer" ,
                        list: [] ,
                    } ,
                    {
                        name: "UploadFile 上传" ,
                        key: "08" ,
                        icon: " " ,
                        url: "/components/upLoadFile" ,
                        list: [] ,
                    } ,
                    {
                        name: "Tabs 标签页" ,
                        key: "09" ,
                        icon: " " ,
                        url: "/components/tabs" ,
                        list: [] ,
                    } ,
                    {
                        name: "Form 表单" ,
                        key: "10" ,
                        icon: " " ,
                        url: "/components/form" ,
                        list: [] ,
                    } ,
                ] ,
            } ,
            {
                name: "Notice 通知组件" ,
                key: "01" ,
                icon: " " ,
                url: "/" ,
                list: [
                    {
                        name: "Message 消息提示" ,
                        key: "01" ,
                        icon: " " ,
                        url: "/components/message" ,
                        list: [] ,
                    } ,
                    {
                        name: "Notification 通知" ,
                        key: "02" ,
                        icon: " " ,
                        url: "/components/notification" ,
                        list: [] ,
                    } ,
                    {
                        name: "MessageBox 弹框" ,
                        key: "03" ,
                        icon: " " ,
                        url: "/components/messageBox" ,
                        list: [] ,
                    } ,
                    {
                        name: "Loading 加载" ,
                        key: "04" ,
                        icon: " " ,
                        url: "/components/Loading" ,
                        list: [] ,
                    } ,
                    {
                        name: "Tooltip 文字提示" ,
                        key: "04" ,
                        icon: " " ,
                        url: "/components/Tooltip" ,
                        list: [] ,
                    } ,
                    {
                        name: "Popconfirm 气泡确认框" ,
                        key: "04" ,
                        icon: " " ,
                        url: "/components/Popconfirm" ,
                        list: [] ,
                    } ,
                ] ,
            } ,
            {
                name: "Navigation 导航组件" ,
                key: "01" ,
                icon: " " ,
                url: "/" ,
                list: [
                    /* {
                        name: "Breadcrumb 面包屑" ,
                        key: "01" ,
                        icon: "" ,
                        url: "/components/breadcrumb" ,
                        list: [] ,
                    } ,*/
                    {
                        name: "Menu 菜单导航" ,
                        key: "02" ,
                        icon: " " ,
                        url: "/components/menu" ,
                        list: [] ,
                    } ,
                ] ,
            } ,
        ] ,
    };
    getUrl = url => {
        this.props.history.push(url); // 需要获取APP中的props的history
    };

    render() {
        {/*<div className="content" id="particles-js">*/
        }
        return (
            <div className={appLess.content}>
                <div className={appLess.mainLeft}>
                    <Menu menuList={this.state.menuList} getUrl={this.getUrl}></Menu>
                </div>
                <div className={appLess.mainRight}>
                    {
                        this.props.routes.map((route , key) => {
                            return <Route key={key} path={route.path} component={route.component}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
