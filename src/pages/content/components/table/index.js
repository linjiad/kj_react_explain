import React ,{ Component } from "react";
import myLess from "./index.less";
import test1 from "./test1.md";
import test2 from "./test2.md";
import test3 from "./test3.md";
const { Table,Tooltip,Popconfirm,Icon} = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        columns : [
            {
                title: "资源名称",
                dataIndex: "name",
                width:"% ",
            },
            {
                title: "视图名称",
                dataIndex: "tableName",
                width:"%",
            },
            {
                title: "描述",
                dataIndex: "desp",
                width:"",
            },
            {
                title: "业务分类",
                dataIndex: "dataOriginName",
                width:"",
            },
            {
                title: "创建人",
                dataIndex: "createBy",
                width:"",
            },
            {
                title: "创建时间",
                dataIndex: "createDate",
                width:"",
            },
        ],
        columns2 : [
            {
                title: "资源名称",
                dataIndex: "name",
                width:"% ",
            },
            {
                title: "视图名称",
                dataIndex: "tableName",
                width:"%",
            },
            {
                title: "描述",
                dataIndex: "desp",
                width:"",
            },
            {
                title: "业务分类",
                dataIndex: "dataOriginName",
                width:"",
            },
            {
                title: "创建人",
                dataIndex: "createBy",
                width:"",
            },
            {
                title: "创建时间",
                dataIndex: "createDate",
                width:"",
            },
            {
                title: "操作",
                dataIndex: "action",
                width:"20%",
                render: (data, index) => {
                    const self = this;
                    return (
                        <div className={myLess.tool_box}>
                            <ul>
                                <li >
                                    <a onClick={self.del.bind(self, data)}>
                              删除
                                    </a>
                                </li>
                                <li >
                                    <Link to={
                                        {
                                            pathname: "/",
                                            state: {
                                                id: data.id,
                                            }
                                        }
                                    }>
                              跳转
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        // <div className={myLess.tool_box}>
                        //     <ul>
                        //         <li >
                        //             <Tooltip placement="topLeft" title="详情">
                        //                 <a className={myLess.table_iconfont}>
                        //                     <Icon colour="#7d7d7d" size="2rem" type="iconcz-jl"/>
                        //                 </a>
                        //             </Tooltip>
                        //         </li>
                        //         <li>
                        //             <Tooltip placement="topLeft" title="修改">
                        //                 <a className={myLess.table_iconfont}>
                        //                     <Icon colour="#7d7d7d" size="2rem" type="iconxiugai"/>
                        //                 </a>
                        //             </Tooltip>
                        //         </li>
                        //         <li>
                        //             <Popconfirm title="确定删除吗?" placement="bottom" cancelText="我再想想" okText="确定" >
                        //                 <Tooltip title="删除" placement="topLeft" >
                        //                     <a className={myLess.table_iconfont}>
                        //                         <Icon colour="#7d7d7d" size="2rem" type="iconempty"/>
                        //                     </a>
                        //                 </Tooltip>
                        //             </Popconfirm>
                        //         </li>
                        //     </ul>
                        // </div>
                    );
                },
            }
        ],
        data:[
            {
                id:"123",
                name: "上传接口",
                tableName:"视图名称",
                desp :"描述",
                dataOriginName:"分类名称",
                dataOrigin:"分类",
                createBy: "创建人",
                createDate:"创建时间",
            },
        ],
        pageNum:1,
        pageSize:10,
        code:`
    const { Table } = window.common;
    state = {
        columns : [
            {
                title: "资源名称",
                dataIndex: "name",
                width:"% ",
            },
            {
                title: "视图名称",
                dataIndex: "tableName",
                width:"%",
            },
            {
                title: "描述",
                dataIndex: "desp",
                width:"",
            },
            {
                title: "业务分类",
                dataIndex: "dataOriginName",
                width:"",
            },
            {
                title: "创建人",
                dataIndex: "createBy",
                width:"",
            },
            {
                title: "创建时间",
                dataIndex: "createDate",
                width:"",
            },
        ],
        data:[
            {
                name: "上传接口",
                tableName:"视图名称",
                desp :"描述",
                dataOriginName:"分类名称",
                dataOrigin:"分类",
                createBy: "创建人",
                createDate:"创建时间",
            },
        ],
        }
     <Table columns = {this.state.columns} data = {this.state.data} tableName="基础表格"/>
`,
        code2:`
    state = {
        columns : [
            {
                title: "资源名称",
                dataIndex: "name",
                width:"% ",
            },
            {
                title: "视图名称",
                dataIndex: "tableName",
                width:"%",
            },
            {
                title: "描述",
                dataIndex: "desp",
                width:"",
            },
            {
                title: "业务分类",
                dataIndex: "dataOriginName",
                width:"",
            },
            {
                title: "创建人",
                dataIndex: "createBy",
                width:"",
            },
            {
                title: "创建时间",
                dataIndex: "createDate",
                width:"",
            },
        ],
        data:[
            {
                name: "上传接口",
                tableName:"视图名称",
                desp :"描述",
                dataOriginName:"分类名称",
                dataOrigin:"分类",
                createBy: "创建人",
                createDate:"创建时间",
            },
        ],
        }
    <Table pageNum={this.state.pageNum} pageSize={this.state.pageSize} columns = {this.state.columns} data = {this.state.data} tableName="带序号表格"/>
`,
        code3:`
    state = {
               columns2 : [
            {
                title: "资源名称",
                dataIndex: "name",
                width:"% ",
            },
            {
                title: "视图名称",
                dataIndex: "tableName",
                width:"%",
            },
            {
                title: "描述",
                dataIndex: "desp",
                width:"",
            },
            {
                title: "业务分类",
                dataIndex: "dataOriginName",
                width:"",
            },
            {
                title: "创建人",
                dataIndex: "createBy",
                width:"",
            },
            {
                title: "创建时间",
                dataIndex: "createDate",
                width:"",
            },
            {
                title: "操作",
                dataIndex: "action",
                width:"20%",
                render: (data, index) => {
                    const self = this;
                    return (
                        <div className={myLess.tool_box}>
                            <ul>
                                <li >
                                    <a onClick={self.del.bind(self, data)}>
                                        删除
                                    </a>
                                </li>
                                <li >
                                    <Link to={
                                        {
                                            pathname: ,
                                            state: {
                                                id: data.id,
                                            }
                                        }
                                    }>
                                        跳转
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    );
                },
            }
        ],
        data:[
            {
                id:"123",
                name: "上传接口",
                tableName:"视图名称",
                desp :"描述",
                dataOriginName:"分类名称",
                dataOrigin:"分类",
                createBy: "创建人",
                createDate:"创建时间",
            },
        ],
        }
    <Table pageNum={this.state.pageNum} pageSize={this.state.pageSize} columns = {this.state.columns2} data = {this.state.data} tableName="操作框表格"/>
`,
    };
    componentDidMount() {
    }
    del = data =>{
        console.log(data);
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test1}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Table columns = {this.state.columns} data = {this.state.data} tableName="基础表格"/>
                </CodePreviewer>
                <MdPreviewer md={test2}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Table pageNum={this.state.pageNum} pageSize={this.state.pageSize} columns = {this.state.columns} data = {this.state.data} tableName="带序号表格"/>
                </CodePreviewer>
                <MdPreviewer md={test3}></MdPreviewer>
                <CodePreviewer code={this.state.code3} showCode={false}>
                    <Table pageNum={this.state.pageNum} pageSize={this.state.pageSize} columns = {this.state.columns2} data = {this.state.data} tableName="操作框表格"/>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
