import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { TextArea } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        form:{
            remarks:"",
        },
        code:`
    const { TextArea } = window.common;
    
    state = {
        form:{
             remarks:"",
        },
    }
     getRemarks = (value) => {
        const form =this.state.form;
        form.remarks = value;
        this.setState({form});
    }
    
     <TextArea title="多行文本框"  value={this.state.form.remarks} placeholder="请输入文字描述"/>
`,
    }
    getRemarks = (value) => {
        const form =this.state.form;
        form.remarks = value;
        this.setState({form});
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <TextArea title="多行文本框"  value={this.state.form.remarks} placeholder="请输入文字描述" onChange={this.getRemarks}/>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
