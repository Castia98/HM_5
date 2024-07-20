import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputDigit, inputDot, clear, performOperation, calculate, inputBackspace, toggleSign } from '../../store/CalcSlice';
import './calcPage.css';

const CalcPage = () => {
    const { currentValue, previousValue } = useSelector(state => state.calc);
    const dispatch = useDispatch();

    const handleDigitClick = (digit) => {
        dispatch(inputDigit(digit));
    };

    const handleOperatorClick = (operator) => {
        dispatch(performOperation({ operator }));
    };

    const handleCalculate = () => {
        dispatch(calculate());
    };

    const handleClear = () => {
        dispatch(clear());
    };

    const handleBackspace = () => {
        dispatch(inputBackspace());
    };

    const handleToggleSign = () => {
        dispatch(toggleSign());
    };


    const displayValue = previousValue ? `${previousValue} ${currentValue}` : currentValue;

    return (
        <div className="calculator">
            <div className="calculator-display">{displayValue}</div>
            <div className="calculator-buttons">
                <button className="row1" onClick={handleBackspace}>←</button>
                <button className="row1" onClick={handleClear}>C</button>
                <button className="row1" onClick={() => handleOperatorClick('%')}>%</button>
                <button className="row1 operator" onClick={() => handleOperatorClick('/')}>/</button>

                <button className="row2" onClick={() => handleDigitClick('7')}>7</button>
                <button className="row2" onClick={() => handleDigitClick('8')}>8</button>
                <button className="row2" onClick={() => handleDigitClick('9')}>9</button>
                <button className="row2 operator" onClick={() => handleOperatorClick('*')}>x</button>

                <button className="row3" onClick={() => handleDigitClick('4')}>4</button>
                <button className="row3" onClick={() => handleDigitClick('5')}>5</button>
                <button className="row3" onClick={() => handleDigitClick('6')}>6</button>
                <button className="row3 operator" onClick={() => handleOperatorClick('-')}>-</button>

                <button className="row4" onClick={() => handleDigitClick('1')}>1</button>
                <button className="row4" onClick={() => handleDigitClick('2')}>2</button>
                <button className="row4" onClick={() => handleDigitClick('3')}>3</button>
                <button className="row4 operator" onClick={() => handleOperatorClick('+')}>+</button>

                <button className="row5" onClick={handleToggleSign}>±</button>
                <button className="row5 double" onClick={() => handleDigitClick('0')}>0</button>
                <button className="row5" onClick={() => handleDigitClick('.')}>.</button>
                <button className="row5 operator full-width" onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
};

export default CalcPage;





