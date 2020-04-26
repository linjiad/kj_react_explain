import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
import test1 from "./test1.md";
const { Input ,Button,TextArea,Form,DataPicker,Select ,Option,ButtonNormal} = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        form:{
            createdBy:"",
            time1:"",
            choose:"",
            explain:"",
            name:"",
            time:"",
            status:"",
            remarks:"",
            appUrl: "",
            email: "",
            mobile: "",
        },
        rules: {
            name: [
                { must: true, message: "请输入名称" },
                { min: 0, max: 50, message: "0-10个字符" },
            ],
            status: [
                { must: true, message: "请选择" },
            ],
            remarks: [
                { must: true, message: "请输入描述文字" },
                { min: 0, max: 50, message: "0-200个字符" },
            ],
            appUrl: [
                { must: true, message: "请输入应用路径" },
                { http: true, message: "请输入正确路径" },
            ],
            email: [
                { must: true, message: "请输入邮箱" },
                { email: true, message: "邮箱格式有误" },
            ],
            mobile: [
                { must: true, message: "请输入手机号" },
                { phone: true, message: "手机格式有误" },
            ],
        },
        formMessage:{},
        code:`
      const { Input ,Button,TextArea,Form,DataPicker,Select ,Option,ButtonNormal} = window.common;
      
    getName = (value) => {
        const form =this.state.form;
        form.name = value;
        const formMessage = {};
        formMessage["name"] = "";
        this.setState({form,formMessage});
    }
    getRemarks = (value) => {
        const form =this.state.form;
        form.remarks = value;
        const formMessage = {};
        formMessage["remarks"] = "";
        this.setState({form,formMessage});
    }
    searchTime = (value) => {
        console.log(value);
        this.setState({time:value});
    }
    searchStatus1 = (value) => {
        this.setState({status:value});
    }
    
      state = {
        form:{
            name:"",
            time:"",
            status:"",
            remarks:"",
         },
        }
    
      <Form  ref={ref => this.form = ref}>
          <ul>
              <li><Input title="输入框"  value={this.state.form.name} placeholder="请输入名称" onChange={this.getName}/></li>
              <li><DataPicker title="日期选择框" value={this.state.form.time} onChange = {this.searchTime}/></li>
              <li><Select  title="选择框"  value={this.state.form.status} onChange={this.searchStatus} defaultValue="">
                    <Option value = "1">选项1</Option>
                    <Option value = "2">选项2</Option>
                    <Option value = "3">选项3</Option>
                    <Option value = "">全部</Option>
                  </Select></li>
              <li><TextArea title="多行文本框"  value={this.state.form.remarks} placeholder="请输入内容" onChange={this.getRemarks}/></li>
          </ul>
      </Form>
          <ul>
             <li style={{width:"100%",display:"flex",margin:"0 38%"}}>
                 <Button type="primary" value="确定" onClick={this.save}></Button>
                 <div style={{width:"5%"}}></div>
                 <ButtonNormal type="primary" value="取消"></ButtonNormal>
             </li>
          </ul>
`,
        code1:`
    const { Input ,Button,TextArea,Form,DataPicker,Select ,Option,ButtonNormal} = window.common;
      
    getAppUrl = (value) => {
        const form =this.state.form;
        form.appUrl = value;
        const formMessage = {};
        formMessage["appUrl"] = "";
        this.setState({form,formMessage});
    }
    getEmail = (value) => {
        const form =this.state.form;
        form.email = value;
        const formMessage = {};
        formMessage["email"] = "";
        this.setState({form,formMessage});
    }
    getMobile = (value) => {
        const form =this.state.form;
        form.mobile = value;
        const formMessage = {};
        formMessage["mobile"] = "";
        this.setState({form,formMessage});
    }
    getName = (value) => {
        const form =this.state.form;
        form.name = value;
        const formMessage = {};
        formMessage["name"] = "";
        this.setState({form,formMessage});
    }
    getRemarks = (value) => {
        const form =this.state.form;
        form.remarks = value;
        const formMessage = {};
        formMessage["remarks"] = "";
        this.setState({form,formMessage});
    }
    searchTime = (value) => {
        console.log(value);
        this.setState({time:value});
    }
    searchStatus = (value) => {
        this.setState({status:value});
    }
    
      state = {
            form:{
            name:"",
            time:"",
            status:"",
            remarks:"",
            appUrl: "",
            email: "",
            mobile: "",
        },
        rules: {
            name: [
                { must: true, message: "请输入名称" },
                { min: 0, max: 50, message: "0-10个字符" },
            ],
            status: [
                { must: true, message: "请选择" },
            ],
            remarks: [
                { must: true, message: "请输入描述文字" },
                { min: 0, max: 50, message: "0-200个字符" },
            ],
            appUrl: [
                { must: true, message: "请输入应用路径" },
                { http: true, message: "请输入正确路径" },
            ],
            email: [
                { must: true, message: "请输入邮箱" },
                { email: true, message: "邮箱格式有误" },
            ],
            mobile: [
                { must: true, message: "请输入手机号" },
                { phone: true, message: "手机格式有误" },
            ],
        },
        formMessage:{},
        }
    
       <Form  ref={ref => this.form = ref} rules={this.state.rules}>
                            <ul>
                                <li>
                                    <Input title="输入框"  value={this.state.form.name} placeholder="请输入名称" onChange={this.getName}
                                        prop={this.state.rules.name} errMessage={this.state.formMessage.name} errName="name" />
                                </li>
                                <li>
                                    <Input title="手机号"  value={this.state.form.mobile} placeholder="请输入手机号" onChange={this.getMobile}
                                        prop={this.state.rules.mobile} errMessage={this.state.formMessage.mobile} errName="mobile"/>
                                </li>
                                <li>
                                    <Input title="Email"  value={this.state.form.email} placeholder="请输入Email" onChange={this.getEmail}
                                        prop={this.state.rules.email} errMessage={this.state.formMessage.email} errName="email"/>
                                </li>
                                <li >
                                    <Input title="URL"  value={this.state.form.appUrl} placeholder="请输入URL" onChange={this.getAppUrl}
                                        prop={this.state.rules.appUrl} errMessage={this.state.formMessage.appUrl} errName="appUrl"/>
                                </li>
                                <li>
                                    <Select  title="选择框"  value={this.state.status} onChange={this.searchStatus}
                                        prop={this.state.rules.status} errMessage={this.state.formMessage.status} errName="status">
                                        <Option value = "1">选项1</Option>
                                        <Option value = "2">选项2</Option>
                                        <Option value = "3">选项3</Option>
                                        <Option value = "">全部</Option>
                                    </Select>
                                </li>
                                <li>
                                    <TextArea title="多行文本框"  value={this.state.form.remarks} placeholder="请输入内容" onChange={this.getRemarks}
                                        prop={this.state.rules.remarks} errMessage={this.state.formMessage.remarks} errName="remarks"/>
                                </li>
                            </ul>
                        </Form>
                        <ul>
                            <li style={{width:"100%",display:"flex",margin:"0 38%"}}>
                                <Button type="primary" value="确定" onClick={this.save}></Button>
                                <div style={{width:"5%"}}></div>
                                <ButtonNormal type="primary" value="取消"></ButtonNormal>
                            </li>
                        </ul>
`,

    }
    componentDidMount() {
    }
    getAppUrl = (value) => {
        const form =this.state.form;
        form.appUrl = value;
        const formMessage = {};
        formMessage["appUrl"] = "";
        this.setState({form,formMessage});
    }
    getEmail = (value) => {
        const form =this.state.form;
        form.email = value;
        const formMessage = {};
        formMessage["email"] = "";
        this.setState({form,formMessage});
    }
  searchChoose = (value) => {
      const form =this.state.form;
      form.status = value;
      const formMessage = {};
      formMessage["status"] = "";
      this.setState({form,formMessage});
  }
    getMobile = (value) => {
        const form =this.state.form;
        form.mobile = value;
        const formMessage = {};
        formMessage["mobile"] = "";
        this.setState({form,formMessage});
    }
    getName = (value) => {
        const form =this.state.form;
        form.name = value;
        const formMessage = {};
        formMessage["name"] = "";
        this.setState({form,formMessage});
    }
    getRemarks = (value) => {
        const form =this.state.form;
        form.remarks = value;
        const formMessage = {};
        formMessage["remarks"] = "";
        this.setState({form,formMessage});
    }
    searchTime = (value) => {
        console.log(value);
        this.setState({time:value});
    }
    searchStatus = (value) => {
        this.setState({status:value});
    }
    getCreatedBy = (value) => {
        const form =this.state.form;
        form.createdBy = value;
        const formMessage = {};
        formMessage["CreatedBy"] = "";
        this.setState({form,formMessage});
    }
    getExplain = (value) => {
        const form =this.state.form;
        form.explain = value;
        const formMessage = {};
        formMessage["explain"] = "";
        this.setState({form,formMessage});
    }
    searchData = (value) => {
        console.log(value);
        this.setState({data:value});
    }
  save2 = () => {
      console.log(this.state.form);
      console.log("处理逻辑");
  }
    save = () => {
        const self = this;
        this.form.check((result) => {
            const formMessage = {};
            result.messageList.forEach((item,index)=>{
                formMessage[item.name] = item.message;
            });
            this.setState({formMessage});
            console.log(result);
        });
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <div className={myLess.Box}>
                        <Form  ref={ref => this.form = ref}>
                            <ul>
                                <li>
                                    <Input title="输入框"  value={this.state.form.createdBy} placeholder="请输入名称" onChange={this.getCreatedBy}/>
                                </li>
                                <li>
                                    <Select  title="选择框"  value={this.state.choose} onChange={this.searchChoose} defaultValue="">
                                        <Option value = "1">选项1</Option>
                                        <Option value = "2">选项2</Option>
                                        <Option value = "3">选项3</Option>
                                        <Option value = "">全部</Option>
                                    </Select>
                                </li>
                                <li>
                                    <TextArea title="多行文本框"  value={this.state.form.explain} placeholder="请输入内容" onChange={this.getExplain}/>
                                </li>
                            </ul>
                        </Form>
                        <ul>
                            <li style={{width:"100%",display:"flex",margin:"0 38%"}}>
                                <Button type="primary" value="确定" onClick={this.save2}></Button>
                                <div style={{width:"5%"}}></div>
                                <ButtonNormal type="primary" value="取消"></ButtonNormal>
                            </li>
                        </ul>
                    </div>
                </CodePreviewer>
                <MdPreviewer md={test1}></MdPreviewer>
                <CodePreviewer code={this.state.code1} showCode={false}>
                    <div className={myLess.Box}>
                        <Form  ref={ref => this.form = ref} rules={this.state.rules}>
                            <ul>
                                <li>
                                    <Input title="输入框"  value={this.state.form.name} placeholder="请输入名称" onChange={this.getName}
                                        prop={this.state.rules.name} errMessage={this.state.formMessage.name} errName="name" />
                                </li>
                                <li>
                                    <Input title="手机号"  value={this.state.form.mobile} placeholder="请输入手机号" onChange={this.getMobile}
                                        prop={this.state.rules.mobile} errMessage={this.state.formMessage.mobile} errName="mobile"/>
                                </li>
                                <li>
                                    <Input title="Email"  value={this.state.form.email} placeholder="请输入Email" onChange={this.getEmail}
                                        prop={this.state.rules.email} errMessage={this.state.formMessage.email} errName="email"/>
                                </li>
                                <li >
                                    <Input title="URL"  value={this.state.form.appUrl} placeholder="请输入URL" onChange={this.getAppUrl}
                                        prop={this.state.rules.appUrl} errMessage={this.state.formMessage.appUrl} errName="appUrl"/>
                                </li>
                                <li>
                                    <Select  title="选择框"  value={this.state.status} onChange={this.searchStatus}
                                        prop={this.state.rules.status} errMessage={this.state.formMessage.status} errName="status">
                                        <Option value = "1">选项1</Option>
                                        <Option value = "2">选项2</Option>
                                        <Option value = "3">选项3</Option>
                                        <Option value = "">全部</Option>
                                    </Select>
                                </li>
                                <li>
                                    <TextArea title="多行文本框"  value={this.state.form.remarks} placeholder="请输入内容" onChange={this.getRemarks}
                                        prop={this.state.rules.remarks} errMessage={this.state.formMessage.remarks} errName="remarks"/>
                                </li>
                            </ul>
                        </Form>
                        <ul>
                            <li style={{width:"100%",display:"flex",margin:"0 38%"}}>
                                <Button type="primary" value="确定" onClick={this.save}></Button>
                                <div style={{width:"5%"}}></div>
                                <ButtonNormal type="primary" value="取消"></ButtonNormal>
                            </li>
                        </ul>
                    </div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
