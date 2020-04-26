import React ,{ Component } from "react";
import myLess from "./index.less";
import test1 from "./test1.md";
import test2 from "./test2.md";
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        code:`
         <div style={{borderLeft:"#0066cc 3px solid",color:"#666",lineHeight:"30px",
           fontSize:"18px",paddingLeft:"10px", fontWeight:"bold"}}>
           页面标题-加粗   #666  18px
         </div>         
          <div style={{color:"#666",fontSize:"16px",lineHeight:"20px",fontWeight:"bold"}}>
            普通页面标题-加粗  #666  16px
          </div>
          <div style={{color:"#666",fontSize:"14px",lineHeight:"20px",fontWeight:"bold"}}>
            小标题-加粗  #666  14px
          </div>
          <div style={{color:"#666",fontSize:"12px",lineHeight:"20px",fontWeight:"bold"}}>
            强调-加粗  #666  12px
          </div>`,
        code2:`
         <div style={{color:"#666",fontSize:"12px"}}>
            正文  Text  #666  12px
            通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明
            通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明</div>
         <div style={{color:"#999",fontSize:"12px"}}>
            正文  Text  #999  12px
            通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明
            通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明</div>
         <div style={{color:"#ccc",fontSize:"12px"}}>
            失效文字  Disabled Text  #ccc  12px</div>
         <div style={{color:"#F06D6F",fontSize:"12px"}}>
            错误文字  Error Text  #F06D6F</div>`,
    };
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test1}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <div style={{borderLeft: "#0066cc 3px solid",color:"#666",lineHeight:"30px",
                        fontSize:"20px",paddingLeft:"10px", fontWeight:"bold"}}>
                        页面主标题-加粗   #666  20px</div>
                    <div style={{height:"20px"}}></div>
                    <div style={{color:"#666",fontSize:"18px",lineHeight:"20px",fontWeight:"bold"}}>
                        普通页面标题-加粗  #666  18px</div>
                    <div style={{height:"20px"}}></div>
                    <div style={{color:"#666",fontSize:"16px",lineHeight:"20px",fontWeight:"bold"}}>
                        小标题-加粗  #666  16px</div>
                    <div style={{height:"20px"}}></div>
                    <div style={{color:"#666",fontSize:"14px",lineHeight:"20px",fontWeight:"bold"}}>
                        强调-加粗  #666  14px</div>
                </CodePreviewer>
                <MdPreviewer md={test2}></MdPreviewer>
                <CodePreviewer code={this.state.code2} showCode={false}>
                    <div style={{color:"#666",fontSize:"14px"}}>
                        正文  Text  #666  14px
                        <br/>
                        通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明
                        通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明</div>
                    <div style={{height:"20px"}}></div>
                    <div style={{color:"#999",fontSize:"14px"}}>
                        正文  Text  #999  14px
                        <br/>
                        通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明
                        通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明通用文字说明</div>
                    <div style={{height:"20px"}}></div>
                    <div style={{color:"#ccc",fontSize:"14px"}}>
                        失效文字  Disabled Text  #ccc  14px</div>
                    <div style={{height:"20px"}}></div>
                    <div style={{color:"#0066CC",fontSize:"14px"}}>
                        链接文字  Link Text  #0066CC  14px</div>
                    <div style={{height:"20px"}}></div>
                    <div style={{color:"#F06D6F",fontSize:"14px"}}>
                        错误文字  Error Text  #F06D6F 14px</div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
