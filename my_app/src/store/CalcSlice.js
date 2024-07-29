// import { createSlice } from '@reduxjs/toolkit';
//
// const initialState = {
//     currentValue: '0',
//     previousValue: '',
//     operator: null,
//     waitingForOperand: false,
// };
//
// const calcSlice = createSlice({
//     name: 'calc',
//     initialState,
//     reducers: {
//         inputDigit: (state, action) => {
//             if (state.waitingForOperand) {
//                 state.currentValue = action.payload;
//                 state.waitingForOperand = false;
//             } else {
//                 state.currentValue = state.currentValue === '0' ? action.payload : state.currentValue + action.payload;
//             }
//         },
//         inputDot: (state) => {
//             if (!state.currentValue.includes('.')) {
//                 state.currentValue += '.';
//             }
//         },
//         clear: (state) => {
//             state.currentValue = '0';
//             state.previousValue = '';
//             state.operator = null;
//             state.waitingForOperand = false;
//         },
//         performOperation: (state, action) => {
//             const { operator } = action.payload;
//
//             if (state.operator && !state.waitingForOperand) {
//                 state.previousValue = `${state.previousValue} ${state.currentValue} ${operator}`;
//                 state.currentValue = '0';
//                 state.waitingForOperand = true;
//             } else {
//                 state.previousValue = `${state.currentValue} ${operator}`;
//                 state.currentValue = '0';
//                 state.operator = operator;
//                 state.waitingForOperand = true;
//             }
//         },
//         calculate: (state) => {
//             if (state.previousValue) {
//                 state.previousValue = `${state.previousValue} ${state.currentValue}`;
//                 state.currentValue = evaluateExpression(state.previousValue);
//                 state.previousValue = '';
//                 state.operator = null;
//             }
//             state.waitingForOperand = false;
//         },
//         inputBackspace: (state) => {
//             if (state.currentValue.length > 1) {
//                 state.currentValue = state.currentValue.slice(0, -1);
//             } else {
//                 state.currentValue = '0';
//             }
//         },
//         toggleSign: (state) => {
//             state.currentValue = (parseFloat(state.currentValue) * -1).toString();
//         }
//     },
// });
//
// function evaluateExpression(expression) {
//     try {
//         return String(eval(expression.replace(/x/g, '*').replace(/÷/g, '/')));
//     } catch (error) {
//         return 'Error';
//     }
// }
//
// export const { inputDigit, inputDot, clear, performOperation, calculate, inputBackspace, toggleSign } = calcSlice.actions;
// export default calcSlice.reducer;