import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementAsync, counterSelector } from "@/store/reducers/counter";
import classes from "./index.module.scss";
import { Button } from "@arco-design/web-react";

const CounterPage = () => {
    const count = useSelector(counterSelector) // 读取 count 值
    const dispatch = useDispatch() // 获得 dispatch，结合 action 就可更新 state

    return (
        <div className={classes['container']}>
            {/* 同步 - */}
            <Button type={"primary"} onClick={() => dispatch(decrement())}>
                -
            </Button>
            <div className="val">{`${count}`}</div>
            {/* 异步 + */}
            <Button type={"primary"} onClick={
                // @ts-ignore
                () => dispatch(incrementAsync(5))
            }>
                +
            </Button>
        </div>
    );
};

export default CounterPage;
