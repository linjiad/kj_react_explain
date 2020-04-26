import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
const {LeftMenu,LeftMenuItem,LeftMenuSub,Icon,LeftMenuWhite, LeftMenuItemWhite, LeftMenuSubWhite} = window.common;
class Menu extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const self = this;
        setTimeout(function () {
            const menuList = [
                {
                    name:"导航一",
                    icon: "",
                    url:"",
                    list:[
                        {
                            name:"分组一",
                            icon: "iconxitongmokuai",
                            url:"/",
                            list:[],
                            checked:true,
                        },
                        {
                            name:"分组二",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[
                                {
                                    name:"选项1",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                                {
                                    name:"选项2",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                            ],
                        },
                        {
                            name:"分组三",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[],
                        },
                    ],
                },
                {
                    name:"导航二",
                    icon: "",
                    url:"",
                    list:[
                        {
                            name:"分组一",
                            icon: "iconxitongmokuai",
                            url:"/",
                            list:[],
                            checked:true,
                        },
                        {
                            name:"分组二",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[],
                        },
                    ],
                },
                {
                    name:"导航三",
                    icon: "",
                    url:"",
                    list:[
                        {
                            name:"分组一",
                            icon: "iconxitongmokuai",
                            url:"/",
                            list:[],
                            checked:true,
                        },
                        {
                            name:"分组二",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[],
                        },
                    ],
                },
            ];
            self.setState({menuList});
        }, 500);
    }
    state = {
        menuList:[],
        code:`
        const {LeftMenu,LeftMenuItem,LeftMenuSub,Icon,LeftMenuWhite, LeftMenuItemWhite, LeftMenuSubWhite} = window.common;
        
        state = {
        menuList:[],
        }
        componentDidMount(){
        const self = this;
        setTimeout(function () {
            const menuList = [
                {
                    name:"导航一",
                    icon: "",
                    url:"",
                    list:[
                        {
                            name:"分组一",
                            icon: "iconxitongmokuai",
                            url:"/",
                            list:[],
                            checked:true,
                        },
                        {
                            name:"分组二",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[
                                {
                                    name:"选项1",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                                {
                                    name:"选项2",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                            ],
                        },
                        {
                            name:"分组三",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[],
                        },
                    ],
                },
                {
                    name:"导航二",
                    icon: "",
                    url:"",
                    list:[
                        {
                            name:"分组一",
                            icon: "iconxitongmokuai",
                            url:"/",
                            list:[],
                            checked:true,
                        },
                        {
                            name:"分组二",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[
                                {
                                    name:"选项1",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                                {
                                    name:"选项2",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                            ],
                        },
                        {
                            name:"分组三",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[],
                        },
                    ],
                },
                {
                    name:"导航三",
                    icon: "",
                    url:"",
                    list:[
                        {
                            name:"分组一",
                            icon: "iconxitongmokuai",
                            url:"/",
                            list:[],
                            checked:true,
                        },
                        {
                            name:"分组二",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[
                                {
                                    name:"选项1",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                                {
                                    name:"选项2",
                                    icon: "iconxitongmokuai",
                                    url:"",
                                    list:[],
                                },
                            ],
                        },
                        {
                            name:"分组三",
                            icon: "iconxitongmokuai",
                            url:"",
                            list:[],
                        },
                    ],
                },
            ];
            self.setState({menuList});
        }, 500);
    }
     select=(id,div)=>{
        console.log(id);
        // this.props.self.props.history.push(id); // 需要获取APP中的props的history
    }
        <LeftMenu OPEN={true}>
            {
                this.state.menuList.map((item,index)=>{
                    if(item.list.length>0){
                        return (
                            <LeftMenuSub title={item.name} lv={1} icon = {item.icon} key={\`1\`}>
                                {
                                    item.list.map((item2,index2)=>{
                                        if(item2.list.length>0){
                                            return (
                                                <LeftMenuSub title={item2.name} lv={2} icon = {item2.icon} key={\`2\`}>
                                                    {
                                                        item2.list.map((item3,index3)=>{
                                                            return (
                                                                <LeftMenuItem lv={3} change={this.select.bind(this,item3.url)} key={\`3\`} checked={item.checked}>
                                                                    <div>
                                                                        <Icon colour="#fff" size="18px" type={item3.icon}/>
                                                                        <span style={{marginLeft:"10px"}}>{item3.name}</span>
                                                                    </div>
                                                                </LeftMenuItem>
                                                            );
                                                        })
                                                    }
                                                </LeftMenuSub>
                                            );}
                                        else{
                                            return(
                                                <LeftMenuItem lv={2} change={this.select.bind(this,item2.url)} key={\`1\`}  checked={item2.checked}>
                                                    <div>
                                                        <Icon colour="#fff" size="18px" type={item2.icon}/>
                                                        <span style={{marginLeft:"10px"}}>{item2.name}</span>
                                                    </div>
                                                </LeftMenuItem>
                                            );
                                        }
                                    })
                                }
                            </LeftMenuSub>
                        );}
                    else{return (
                        <LeftMenuItem lv={1} change={this.select.bind(this,item.url)} key={\`1\`} checked={item.checked}>
                            <div onClick={this.check}>
                                <Icon colour="#fff" size="18px" type={item.icon}/>
                                <span style={{marginLeft:"10px"}}>{item.name}</span>
                            </div>
                        </LeftMenuItem>
                    );
                    }
                })
            }
        </LeftMenu>
       
        `,
    };
    select=(id,div)=>{
        console.log(id);
        // this.props.self.props.history.push(id); // 需要获取APP中的props的history
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <div style={{ width: "100%",height:"100%", display:"flex"}}>
                        <div style={{ width: "16%",height:"100%"}}>
                            <div style={{color:"#666",lineHeight:"30px", fontSize:"20px",
                                fontWeight:"bold",marginBottom:"5%"}}>dark</div>
                            <LeftMenu OPEN={true}>
                                {
                                    this.state.menuList.map((item,index)=>{
                                        if(item.list.length>0){
                                            return (
                                                <LeftMenuSub title={item.name} lv={1} icon = {item.icon} key={`${index}1`}>
                                                    {
                                                        item.list.map((item2,index2)=>{
                                                            if(item2.list.length>0){
                                                                return (
                                                                    <LeftMenuSub title={item2.name} lv={2} icon = {item2.icon} key={`${index2}2`}>
                                                                        {
                                                                            item2.list.map((item3,index3)=>{
                                                                                return (
                                                                                    <LeftMenuItem lv={3} change={this.select.bind(this,item3.url)} key={`${index3}3`} checked={item.checked}>
                                                                                        <div>
                                                                                            <Icon colour="#fff" size="18px" type={item3.icon}/>
                                                                                            <span style={{marginLeft:"10px"}}>{item3.name}</span>
                                                                                        </div>
                                                                                    </LeftMenuItem>
                                                                                );
                                                                            })
                                                                        }
                                                                    </LeftMenuSub>
                                                                );}
                                                            else{
                                                                return(
                                                                    <LeftMenuItem lv={2} change={this.select.bind(this,item2.url)} key={`${index2}1`}  checked={item2.checked}>
                                                                        <div>
                                                                            <Icon colour="#fff" size="18px" type={item2.icon}/>
                                                                            <span style={{marginLeft:"10px"}}>{item2.name}</span>
                                                                        </div>
                                                                    </LeftMenuItem>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </LeftMenuSub>
                                            );}
                                        else{return (
                                            <LeftMenuItem lv={1} change={this.select.bind(this,item.url)} key={`${index}1`} checked={item.checked}>
                                                <div onClick={this.check} style={{width:"100%"}}>
                                                    <Icon colour="#fff" size="18px" type={item.icon}/>
                                                    <span style={{marginLeft:"10px"}}>{item.name}</span>
                                                </div>
                                            </LeftMenuItem>
                                        );
                                        }
                                    })
                                }
                            </LeftMenu>
                        </div>
                        <div style={{width:"10%"}}></div>
                        <div style={{ width: "16%",height:"100%"}}>
                            <div style={{color:"#666",lineHeight:"30px", fontSize:"20px",
                                fontWeight:"bold",marginBottom:"5%"}}>light</div>
                            <LeftMenuWhite>
                                {
                                    this.state.menuList.map((item,index)=>{
                                        if(item.list.length>0){
                                            return (
                                                <LeftMenuSubWhite title={item.name} lv={1} icon = {item.icon} key={`${index}1`}>
                                                    {
                                                        item.list.map((item2,index2)=>{
                                                            if(item2.list.length>0){
                                                                return (
                                                                    <LeftMenuSubWhite title={item2.name} lv={2} icon = {item2.icon} key={`${index2}2`}>
                                                                        {
                                                                            item2.list.map((item3,index3)=>{
                                                                                return (
                                                                                    <LeftMenuItemWhite lv={3} change={this.select.bind(this,item3.url)} key={`${index3}3`} checked={item3.checked}>
                                                                                        <div>
                                                                                            <Icon color="#324758" size="16px" type={item3.icon}/>
                                                                                            <span>{item3.name}</span>
                                                                                        </div>
                                                                                    </LeftMenuItemWhite>
                                                                                );
                                                                            })
                                                                        }
                                                                    </LeftMenuSubWhite>
                                                                );}
                                                            else{
                                                                return(
                                                                    <LeftMenuItemWhite lv={2} change={this.select.bind(this,item2.url)} key={`${index2}1`}  checked={item2.checked}>
                                                                        <div>
                                                                            <Icon color="#324758" size="16px" type={item2.icon}/>
                                                                            <span>{item2.name}</span>
                                                                        </div>
                                                                    </LeftMenuItemWhite>
                                                                );
                                                            }
                                                        })
                                                    }
                                                </LeftMenuSubWhite>
                                            );}
                                        else{return (
                                            <LeftMenuItemWhite lv={1} change={this.select.bind(this,item.url)} key={`${index}1`} checked={item.checked}>
                                                <div onClick={this.check} style={{width:"100%"}}>
                                                    <Icon color="#324758" size="16px" type={item.icon}/>
                                                    <span>{item.name}</span>
                                                </div>
                                            </LeftMenuItemWhite>
                                        );
                                        }
                                    })
                                }
                            </LeftMenuWhite>
                        </div>
                    </div>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Menu;