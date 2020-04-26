import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Breadcrumb } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        position:"", // 获取位置
        code:`
    const { DataPicker } = window.common;

    state = {
         time: "", // 时间
         position:"Breadcrumb", // 获取位置
        }
    
    <Breadcrumb position={this.state.position}/>
`,
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Breadcrumb position={this.state.position}/>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
