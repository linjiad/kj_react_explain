import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
import test1 from "./test1.md";
const {MyTransfer,Transfer } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        //Transfer
        leftList1:[
            {
                name:"选项1",
                id:"1",
            },
            {
                name:"选项2",
                id:"2",
            },
            {
                name:"选项3",
                id:"3",
            }
        ],
        //MyTransfer
        rightList1:[
        ],
        leftList:[],
        rightList:[],
        code:`
    const {MyTransfer,Transfer } = window.common;

    state = {
        leftList:[],
        rightList:[],
        }
       
    output = (data) => {
        console.log(data);
        this.setState({leftList1:data.leftList,rightList1:data.rightList});
    } 
    
  <Transfer leftList={this.state.leftList} rightList={this.state.rightList} onChange={this.output}></Transfer>
`,
        code1:`
    const {MyTransfer,Transfer } = window.common;

    state = {
        leftList:[],
        rightList:[],
        }
       
    output = (data) => {
        console.log(data);
        this.setState({leftList:data.leftList,rightList:data.rightList});
    } 
    
  <MyTransfer leftList={this.state.leftList} rightList={this.state.rightList} onChange={this.output}></MyTransfer>
`,
    }
    output = (data) => {
        console.log(data);
        this.setState({leftList:data.leftList,rightList:data.rightList});
    }
    output1 = (data) => {
        console.log(data);
        this.setState({leftList1:data.leftList,rightList1:data.rightList});
    }
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <div style={{width:"50%"}}>
                        <Transfer leftList={this.state.leftList1} rightList={this.state.rightList1} onChange={this.output1}></Transfer>
                    </div>
                </CodePreviewer>
                <MdPreviewer md={test1}></MdPreviewer>
                <CodePreviewer code={this.state.code1} showCode={false}>
                    <div style={{width:"60%"}}>
                        <MyTransfer leftList={this.state.leftList1} rightList={this.state.rightList1} onChange={this.output1}></MyTransfer>
                    </div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
