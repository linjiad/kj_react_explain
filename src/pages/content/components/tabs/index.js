import React ,{ Component } from "react";
import myLess from "./index.less";
import test from "./test.md";
const { Tabs,TabsPane } = window.common;
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        code:`
      const { Tabs,TabsPane } = window.common;
      
      callback = (tab, name) => {
        console.log(name);
    }

      <Tabs onChange={this.callback}>
              <TabsPane  tab="1" key="0" name="选项卡1" >
                 选项卡1的内容
              </TabsPane>
              <TabsPane  tab="2" key="1" name="选项卡2" >
                 选项卡2的内容
              </TabsPane>
              <TabsPane  tab="3" key="2" name="选项卡3" >
                 选项卡3的内容
             </TabsPane>
      </Tabs>
`,
    }
    componentDidMount() {
    }
    callback = (tab, name) => {
        console.log(tab,name);
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Tabs onChange={this.callback}>
                        <TabsPane  tab="1" key="00" name="选项卡1" >
                            选项卡1的内容
                        </TabsPane>
                        <TabsPane  tab="2" key="22" name="选项卡2" >
                            选项卡2的内容
                        </TabsPane>
                        <TabsPane  tab="3" key="11" name="选项卡3" >
                            选项卡3的内容
                        </TabsPane>
                    </Tabs>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
