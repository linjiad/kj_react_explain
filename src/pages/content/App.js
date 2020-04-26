import React,{ Component } from "react";
import appLess from "./App.less";
import {Link} from "react-router-dom";
import img1 from "../../static/imgs/kuangjia.png";
import img2 from "../../static/imgs/zujian.png";
import img3 from "../../static/imgs/qita.png";
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={appLess.container}>
                    <a className={appLess.card}>
                        <div className={appLess.front} >
                            <div className={appLess.frontTitle}>框架</div>
                            <img src={img1} alt=""/>
                            <p>帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
                        </div>
                        <div className={appLess.back}>
                            <div>
                                <p>构建了一套基于 React 的中后台管理控制台的脚手架，它可以帮助你快速搭建企业级中后台产品原型。</p>
                                <Link to='/root/introduction'><button className={appLess.button}>查看详情</button></Link>
                            </div>
                        </div>
                    </a>
                    <a className={appLess.card}>
                        <div className={appLess.front} >
                            <div className={appLess.frontTitle}>组件</div>
                            <img src={img2} alt=""/>
                            <p>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
                        </div>
                        <div className={appLess.back}>
                            <div>
                                <p>提炼自企业级中后台产品的交互语言和视觉风格。</p>
                                <p>开箱即用的高质量 React 组件。</p>
                                <p>全链路开发和设计工具体系。</p>
                                <Link to='/components/text'><button className={appLess.button}>查看详情</button></Link>
                            </div>
                        </div>
                    </a>
                    <a className={appLess.card}>
                        <div className={appLess.front} >
                            <div className={appLess.frontTitle}>其他资源</div>
                            <img src={img3} alt=""/>
                            <p>更多工具</p>
                        </div>
                        <div className={appLess.back}>
                            <div>
                                <p>敬请期待</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={appLess.content}></div>
            </div>
        );
    }
}

export default App;
