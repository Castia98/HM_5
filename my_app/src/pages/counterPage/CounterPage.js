import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByTen, decrementByTen, reset } from '../../redux/CounterReducer';
import './CounterPage.css';

const CounterPage = () => {
    const counter = useSelector(state => state.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByTen = () => {
        dispatch(incrementByTen());
    };

    const handleDecrementByTen = () => {
        dispatch(decrementByTen());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div>
            <p>{counter}</p>
            <button className="button" onClick={handleIncrement}>+1</button>
            <button className="button" onClick={handleDecrement}>-1</button>
            <button className="button" onClick={handleIncrementByTen}>+10</button>
            <button className="button" onClick={handleDecrementByTen}>-10</button>
            <button className="button reset-button" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default CounterPage;