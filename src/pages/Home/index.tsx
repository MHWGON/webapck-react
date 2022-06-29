import React from "react";
import { Button } from "@arco-design/web-react";
import classes from "./index.module.scss";
import { connect } from "react-redux";
import { increment } from "@/store/reducers/counter";

interface IState {
    attr: string;
}

class ClassTest extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.onClickTest = this.onClickTest.bind(this);
        this.state = {attr: 'value'};
    }
    componentDidMount(): void {   // TODO 计时器
        console.log('componentDidMount');
    }
    onClickTest() {
        this.props.setCounterInfo();
    }
    onClickTestLam = () => {
        this.setState({ attr: 'value' });
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
                <br/>
                <div>counter____: {this.props.counter.value}</div>
            </div>
        )
    }
}

const mapStateToProps = (store: Record<string, any>) => {

    return {
        counter: store.counter
    }
}
const mapDispatchToProps = (dispatch: any) => {

    return {
        setCounterInfo: () =>{
            dispatch(increment());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassTest);
