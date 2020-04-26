import React ,{ Component } from "react";
import myLess from "./index.less";
import test1 from "./test.md";
import test2 from "./test2.md";
import img1 from "./01.png";
import img2 from "./02.png";
import { Link } from "react-router-dom";
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
                <h1>整体目录结构</h1>
                <img src={img2}></img>
                <MdPreviewer md={test1}></MdPreviewer>
                <h1>src目录结构</h1>
                <img src={img1}></img>
                <MdPreviewer md={test2}></MdPreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
