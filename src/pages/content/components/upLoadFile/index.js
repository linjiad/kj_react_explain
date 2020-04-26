import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { UploadFile,message } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        code:`
    const { Table } = window.common;
    
    uploadSuccess = (e)=>{
        console.log(e);
    }
    uploadError = (e)=> {
        console.log(e);
    }
    
    state = {
        fileUpUrlOld:{
            url: "http://119.3.195.94:11012/hdfs/hdfsUpload",
            download:"http://49.4.4.4:30021/fastdfs//download/file?filePath=",
            author: "zhuangyea",
            name: "上传文件"
        }
    }
        
     <UploadFile type = {[{"directory":"analysis"}]}
           uploadUrl={this.state.fileUpUrlOld}
           success={this.uploadSuccess} typeList={[".sh",".py",".xls"]}
           error={this.uploadError}></UploadFile>
`,
        fileUpUrlOld:{
            url: "http://119.3.195.94:11012/hdfs/hdfsUpload",
            download:"http://49.4.4.4:30021/fastdfs//download/file?filePath=",
            author: "zhuangyea",
            name: "上传文件"
        }
    };
    uploadSuccess = (e)=>{
        message.success(`上传成功`,5);
    }
    uploadError = (e)=> {
        message.erro(`上传文件格式错误——${(e)?e:""}`,5);
    }
    componentDidMount() {
    }
    del = data =>{
        console.log(data);
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <div style={{width:"15%"}}>
                        <UploadFile type = {[{"directory":"analysis"}]}
                            uploadUrl={this.state.fileUpUrlOld}
                            success={this.uploadSuccess} typeList={["sh","py","csv"]}
                            error={this.uploadError}></UploadFile>
                    </div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
