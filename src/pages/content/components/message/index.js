import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
import {post} from "../../../../services/request/index";
const { Button,message} = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    success = ()=>{
        console.log(message);
        message.success("This is a success message",10);
    }
    error = ()=>{
        message.erro("This is an error message",10);
    }
    warning = ()=>{
        message.warning("This is a warning message",10);
    }

    state = {
        rizhiDisaplay:false,
        messageData:"",
        code:`
    const { Button,message} = window.common;
    
    success = ()=>{
        console.log(message);
        message.success("This is a success message",10);
    }
    error = ()=>{
        message.erro("This is an error message",10);
    }
    warning = ()=>{
        message.warning("This is a warning message",10);
    }

    <Button onClick={this.success} value="Success"/>
    <Button onClick={this.error} value="Error"/>
    <Button onClick={this.warning} value="Warning"/>
    
    <Loading disaplay={this.state.loading}></Loading>
`,
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <div style={{display:"flex"}}>
                        <Button onClick={this.success} value="Success"/>
                        <div style={{ width: "25px",}}></div>
                        <Button onClick={this.error} value="Error"/>
                        <div style={{ width: "25px",}}></div>
                        <Button onClick={this.warning} value="Warning"/>
                    </div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
