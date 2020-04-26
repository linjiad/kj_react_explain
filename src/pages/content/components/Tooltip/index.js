import React ,{ Component } from "react";
import myLess from "./index.less";
const { Tooltip,Icon  } = window.common;
import test from "./test.md";
import { Link } from "react-router-dom";
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";
class Me extends Component {
    constructor(){
        super();
    }
    state = {
        code:`
         const { Tooltip,Icon} = window.common;

         <Tooltip title="这是一段文字说明">
            <a>
                <Icon colour="" size="5rem" type="iconceshi"/>
            </a>
        </Tooltip>
`,
    };
    componentDidMount() {
    }
    render() {
        return (
            <PreviewLayout>
                <MdPreviewer md={test}></MdPreviewer>
                <CodePreviewer code={this.state.code} showCode={false}>
                    <Tooltip title="这是一段文字说明">
                        <a>
                            <Icon colour="" size="5rem" type="iconceshi"/>
                        </a>
                    </Tooltip>
                </CodePreviewer>
            </PreviewLayout>
        );
    }
}
export default Me;
