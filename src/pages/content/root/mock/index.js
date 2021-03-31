import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Table,message } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
import {post,get} from "../../../../services/request";
class Me extends Component {
    constructor(){
        super();
        // post({
        //     url:url.test.url,
        //     params: {
        //         id:"123",
        //         name:"linjiad",
        //     },
        //     type:"json"
        // }).then((res) => {
        //     this.setState({total:res.total});
        //     this.setState({data:res.data});
        // }).catch((errMsg) => {
        //     message.erro("错误",5);
        // });
    }
    state = {}
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
