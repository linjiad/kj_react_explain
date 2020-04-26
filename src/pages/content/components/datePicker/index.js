import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
import test1 from "./test1.md";
const { DataPicker,DataPicker1} = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        time: "", // 时间
        etime:"",
        code:`
    const { DataPicker } = window.common;

    state = {
         time: "", // 时间
        }
        
    searchTime = (value) => {
        this.setState({time:value});
    }
     <DataPicker title="创建时间" value={this.state.time}  onChange = {this.searchTime}/>
`,
        code1:`
    const { DataPicker1 } = window.common;

    state = {
         etime: "", // 时间
        }
        
    searchEndTime = (value) => {
        this.setState({etime:value});
    }
     <DataPicker1 title="选择时间" showTime={true} value={this.state.etime} onChange={this.searchEndTime}/>
`,
    }
    // 搜索时间
    searchTime = (value) => {
        this.setState({time:value});
    }
    searchEndTime = (value) => {
        this.setState({etime:value});
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code1} showCode={false}>
                    <DataPicker1 title="选择时间" showTime={true} value={this.state.etime} onChange={this.searchEndTime}/>
                </CodePreviewer>
                <MdPreviewer md={test1}></MdPreviewer>
                {/*<CodePreviewer code={this.state.code} showCode={false}>*/}
                {/*<DataPicker title="选择时间" value={this.state.time} onChange = {this.searchTime}/>*/}
                {/*</CodePreviewer>*/}
            </PreviewLayout>
        );
    }
}
export default Me;
