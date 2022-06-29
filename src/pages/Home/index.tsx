import React from "react";
import { Button, Message } from "@arco-design/web-react";
import classes from "../../assets/style/index.module.scss";

interface IState {
    attr: string
}

class ClassTest extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.onClickTest = this.onClickTest.bind(this);
        this.state = {attr: 'val'};
    }
    componentDidMount(): void {   // 计时器
        console.log('componentDidMount');
    }
    onClickTest() {
         Message.info('This is an info message!');
    }
    onClickTestLam = () => {
        this.setState({ attr: 'val1' });
        console.log('onClickTestLam');
    }
    render(): React.ReactNode {
        // render中的this是组件实例对象
        return (
            <div className={classes['container']}>
                <div>This is ClassComponent Test!</div>
                <Button type={"primary"} onClick={this.onClickTest}>onClickTest</Button>
                &nbsp;&nbsp;
                <Button type={"outline"} onClick={this.onClickTestLam}>onClickTestLam</Button>
                <div>This is state attr {this.state.attr}</div>
            </div>
        )
    }
}

export default ClassTest;
