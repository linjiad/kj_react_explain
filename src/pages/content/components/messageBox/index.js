import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
import {post} from "../../../../services/request/index";
const { Modal,Button} = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    // 弹出窗口
    showModel = ()=>{
        this.setState({display:true});
    }
    // 关闭窗口
    closeModel = (value) =>{
        this.setState({display:value,messageData:""});
    }
    state = {
        display:false,
        code:`
    const { Modal,Button } = window.common;

        state = {
            display:false,
        }
        
        closeModel = (value) =>{
            this.setState({display:value,messageData:""});
        }
    
       <Button value="点击打开弹出框" onClick={this.showModel}></Button>
          <Modal disaplay={this.state.display}
              width={50} height={30} title="标题信息" closeModel={this.closeModel}>
          <div>这是一条弹窗测试信息</div>
        </Modal>
`,
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Button value="点击打开弹出框" onClick={this.showModel}></Button>
                    <Modal disaplay={this.state.display}
                        width={50} height={30}
                        title="标题信息" closeModel={this.closeModel}>
                        <div>这是一条弹窗测试信息</div>
                    </Modal>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
