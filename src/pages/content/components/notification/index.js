import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
import {post} from "../../../../services/request/index";
const { message,Button } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    openMessage = ()=>{
        message.openMessage("This is a message",10);
    }
    state = {
        code:`
    const { message,Button } = window.common;

    openMessage = ()=>{
        message.openMessage("This is a message",10);
    }
    
     <Button onClick={this.openMessage} value="OpenMessage"/>
`,
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Button onClick={this.openMessage} value="OpenMessage"/>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
