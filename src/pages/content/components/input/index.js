import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Input } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        form:{
            name:"",
        },
        code:`
      const { Input } = window.common;
    
      getName = (value) => {
        const form =this.state.form;
        form.name = value;
        this.setState({form});
        }
     
      state = {
        form:{
            name:"",
         },
        }
    
    <Input title="输入框"  value={this.state.form.name} placeholder="请输入名称" onChange={this.getName}/>
`,
    }
    getName = (value) => {
        const form =this.state.form;
        form.name = value;
        this.setState({form});
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Input title="输入框"  value={this.state.form.name} placeholder="请输入名称" onChange={this.getName}/>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
