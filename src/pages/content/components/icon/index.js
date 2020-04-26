import React ,{ Component } from "react";
import myLess from "./index.less";
const { Icon} = window.common;
import test from "./test.md";
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        code:`
         const { Icon} = window.common;

         <Icon colour="" size="" type="iconzhuye"/>
`,
    };
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <ul className={myLess.icon_list}>
                        <li>
                            <Icon colour="" size="" type="iconzhuye"/>
                            <span className={myLess.icon_name}>iconzhuye</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconzhuye3"/>
                            <span className={myLess.icon_name}>iconzhuye3</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconquxiao"/>
                            <span className={myLess.icon_name}>iconquxiao</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconquxiao1"/>
                            <span className={myLess.icon_name}>iconquxiao1</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconhuaban"/>
                            <span className={myLess.icon_name}>iconhuaban</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconren"/>
                            <span className={myLess.icon_name}>iconren</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconwode"/>
                            <span className={myLess.icon_name}>iconwode</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconstart"/>
                            <span className={myLess.icon_name}>iconstart</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconfinish"/>
                            <span className={myLess.icon_name}>iconfinish</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconempty"/>
                            <span className={myLess.icon_name}>iconempty</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconfabu3"/>
                            <span className={myLess.icon_name}>iconfabu2</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconfabu2"/>
                            <span className={myLess.icon_name}>iconfabu3</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconfabu"/>
                            <span className={myLess.icon_name}>iconfabu</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconpublish"/>
                            <span className={myLess.icon_name}>iconpublish</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconguanli"/>
                            <span className={myLess.icon_name}>iconguanli</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconceshi"/>
                            <span className={myLess.icon_name}>iconceshi</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconguanli1"/>
                            <span className={myLess.icon_name}>iconguanli1</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="icondingyue1"/>
                            <span className={myLess.icon_name}>icondingyue1</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconxiugai"/>
                            <span className={myLess.icon_name}>iconxiugai</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconxiazai"/>
                            <span className={myLess.icon_name}>iconxiazai</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconguanlian"/>
                            <span className={myLess.icon_name}>iconguanlian</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconbaobiaoguanli"/>
                            <span className={myLess.icon_name}>iconbaobiaoguanli</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconAPIguanli"/>
                            <span className={myLess.icon_name}>iconAPIguanli</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconyuanshujudingyi"/>
                            <span className={myLess.icon_name}>iconyuanshujudingyi</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconkehumokuaipeizhi"/>
                            <span className={myLess.icon_name}>iconkehumokuaipeizhi</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="icondashujukeshihuaico-"/>
                            <span className={myLess.icon_name}>icondashujukeshihuaico-</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconjiaobenguanli"/>
                            <span className={myLess.icon_name}>iconjiaobenguanli</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="icongongjuguanli"/>
                            <span className={myLess.icon_name}>icongongjuguanli</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconhuifu"/>
                            <span className={myLess.icon_name}>iconhuifu</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconxiazai1"/>
                            <span className={myLess.icon_name}>iconxiazai1</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconwushuju"/>
                            <span className={myLess.icon_name}>iconwushuju-</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconzanwushuju"/>
                            <span className={myLess.icon_name}>iconzanwushuju</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconziyuanshujuku"/>
                            <span className={myLess.icon_name}>iconziyuanshujuku</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconzhuanxierizhi"/>
                            <span className={myLess.icon_name}>iconzhuanxierizhi</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconfenxi"/>
                            <span className={myLess.icon_name}>iconfenxi</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconbianma"/>
                            <span className={myLess.icon_name}>iconbianma</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconshenqing"/>
                            <span className={myLess.icon_name}>iconshenqing</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconnginx"/>
                            <span className={myLess.icon_name}>iconnginx</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconweb-icon-"/>
                            <span className={myLess.icon_name}>iconweb-icon-</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconfangwufangchan"/>
                            <span className={myLess.icon_name}>iconfangwufangchan</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconxiaoxi"/>
                            <span className={myLess.icon_name}>iconxiaoxi</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="icontongji"/>
                            <span className={myLess.icon_name}>icontongji</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconsystem-statu"/>
                            <span className={myLess.icon_name}>iconsystem-statu</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconxiajia2"/>
                            <span className={myLess.icon_name}>iconxiajia2</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconshujucaiji-"/>
                            <span className={myLess.icon_name}>iconshujucaiji-</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconqita"/>
                            <span className={myLess.icon_name}>iconqita</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconwenjian"/>
                            <span className={myLess.icon_name}>iconwenjian</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconbangzhu1"/>
                            <span className={myLess.icon_name}>iconbangzhu1</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconOCR"/>
                            <span className={myLess.icon_name}>iconOCR</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconzixun"/>
                            <span className={myLess.icon_name}>iconzixun</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconset"/>
                            <span className={myLess.icon_name}>iconset</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconpinglun"/>
                            <span className={myLess.icon_name}>iconpinglun</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconpingtai_mokuai"/>
                            <span className={myLess.icon_name}>iconpingtai_mokuai</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconapi"/>
                            <span className={myLess.icon_name}>iconapi</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconcaozuo"/>
                            <span className={myLess.icon_name}>iconcaozuo</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconyewumokuai"/>
                            <span className={myLess.icon_name}>iconyewumokuai</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconliuchengmoxing"/>
                            <span className={myLess.icon_name}>iconliuchengmoxing</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconxiaofeijilu2"/>
                            <span className={myLess.icon_name}>iconxiaofeijilu2</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="iconxiaofeijilu1"/>
                            <span className={myLess.icon_name}>iconxiaofeijilu1</span>
                        </li>
                        <li>
                            <Icon colour="" size="" type="icondingyue"/>
                            <span className={myLess.icon_name}>icondingyue</span>
                        </li>
                    </ul>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
