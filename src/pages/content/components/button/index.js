import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const {  Button,ButtonSmall,ButtonLarge,ButtonNormal,} = window.common;
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        code:`
     const {  Button,ButtonSmall,ButtonLarge,ButtonNormal,} = window.common;

     <Button value="按钮"/>
     <ButtonLarge value="超大按钮"/>
     <ButtonSmall value="迷你按钮"/>
     <ButtonNormal value="普通按钮"/>
`,
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <div style={{ color:"#7b7b7d",fontSize:" 14px"}}>
                        <div style={{ margin:"15px 0",display:"flex"}}>默认按钮： <Button value="按钮"/></div>
                        <div style={{ display:"flex"}}>迷你按钮： <ButtonSmall value="按钮"/></div>
                        <div style={{ margin:"15px 0",display:"flex"}}>超大按钮：<ButtonLarge value="按钮"/></div>
                        <div style={{ display:"flex"}}>简易按钮： <ButtonNormal value="按钮"/></div>
                    </div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
