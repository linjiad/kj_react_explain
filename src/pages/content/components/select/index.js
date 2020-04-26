import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Select,Option } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        status: "",
        code:`
    const { Select,Option } = window.common;

    state = {
        status: "",
    }
    searchStatus = (value) => {
        this.setState({status:value});
    }
    
         <Select  title="选择框" onChange={this.searchStatus} value={this.state.status}>
             <Option value = "1">选项1</Option>
             <Option value = "2">选项2</Option>
             <Option value = "3">选项3</Option>
             <Option value = "">全部</Option>
         </Select>
`,
    }
    searchStatus = (value) => {
        this.setState({status:value});
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Select  title="选择框" onChange={this.searchStatus} value={this.state.status}>
                        <Option value = "1">选项1</Option>
                        <Option value = "2">选项2</Option>
                        <Option value = "3">选项3</Option>
                        <Option value = "">全部</Option>
                    </Select>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
