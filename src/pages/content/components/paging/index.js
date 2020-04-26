import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Paging } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        total:1001,
        pageNum:1,
        pageSize:5,
        code:`
    const { Paging } = window.common;
    
    state = {
        total:1001,
        pageNum:1,
        pageSize:5,
        }
    turnPage = (page) => {
        this.setState({pageNum:page.pageNum,pageSize:page.pageSize});
    }
        
     <Paging total={this.state.total} pageNum={this.state.pageNum} pageSize={this.state.pageSize} onChange={this.turnPage}/>
`,
    }
    // 翻页
    turnPage = (page) => {
        this.setState({pageNum:page.pageNum,pageSize:page.pageSize});
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Paging total={this.state.total} pageNum={this.state.pageNum} pageSize={this.state.pageSize} onChange={this.turnPage}/>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
