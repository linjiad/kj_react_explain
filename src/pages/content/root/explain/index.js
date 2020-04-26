import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Table } = window.common;
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
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
