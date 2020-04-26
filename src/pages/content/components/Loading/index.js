import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Loading,Button } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        loading:true,
        code:`
    const { Loading } = window.common;

    state = {
         loading:true,
        }
    
    <div style={{display:"flex"}}>
        <Button value="开启" onClick={()=>{this.setState({loading:true});}}/>
        <Button value="关闭" onClick={()=>{this.setState({loading:false});}}/>
    </div>
    <div style={{ margin:"-23vh 0"}}>
        <Loading disaplay={this.state.loading}></Loading>
    </div>
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
                        <Button value="开启" onClick={()=>{this.setState({loading:true});}}/>
                        <Button value="关闭" onClick={()=>{this.setState({loading:false});}}/>
                    </div>
                    <div style={{ margin:"-23vh 0"}}>
                        <Loading disaplay={this.state.loading}></Loading>
                    </div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
