import React ,{ Component } from "react";
import myLess from "./index.less";
const { Popconfirm,Icon  } = window.common;
import test from "./test.md";
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
  state = {
      code:`
         const { Popconfirm,Icon} = window.common;

         <Popconfirm title="确定需要删除吗?" cancelText="取消" okText="确定" onConfirm={() => console.log("删除")}>
              <a>
                  <Icon colour="" size="5rem" type="iconceshi"/>
              </a>
          </Popconfirm>
`,
  };
  componentDidMount() {
  }
  render() {
      return (
          <PreviewLayout>
              <MdPreviewer md={test}></MdPreviewer>
              <CodePreviewer code={this.state.code} showCode={false}>
                  <Popconfirm title="确定需要删除吗?" cancelText="取消" okText="确定" onConfirm={() => console.log("删除")}>
                      <a>
                          <Icon colour="" size="5rem" type="iconceshi"/>
                      </a>
                  </Popconfirm>
              </CodePreviewer>
          </PreviewLayout>
      );
  }
}
export default Me;
