import React,{ Component } from "react";
// import { HashRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import appLess from "./App.less";
import Menu from "../../components/LeftMenu/index";
import checkConfig from "../../../router/check";

class App extends Component {
    constructor(props) {
        super(props);
        this.Check = new checkConfig();
    }
    state = {
        menuList:[
            {
                name:"简介",
                key: "01",
                icon: " ",
                url: "/root/introduction",
                list:[],
            },
            {
                name:"切换npm源",
                key: "01",
                icon: " ",
                url: "/root/npm",
                list:[],
            },
            {
                name:"目录结构",
                key: "02",
                icon: " ",
                url: "/root/installPage",
                list:[],
            },
            {
                name:"request请求说明",
                key: "02",
                icon: " ",
                url: "/root/explainPage",
                list:[],
            },
            {
                name:"router路由配置",
                key: "02",
                icon: " ",
                url: "/root/router",
                list:[],
            },
        ],
    }
    getUrl = url =>{
        this.props.history.push(url); // 需要获取APP中的props的history
    }
    render() {
        {/*<div className="content" id="particles-js">*/}
        return (
            <div className={appLess.content}>
                <div className={appLess.mainLeft} >
                    <Menu menuList = {this.state.menuList} getUrl={this.getUrl}></Menu>
                </div>
                <div className={appLess.mainRight}>
                    {
                        this.props.routes.map((route,key)=>{
                            return <Route key={key} exact path={route.path} component={route.component}/>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
