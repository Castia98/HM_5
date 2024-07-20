// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// const INCREMENT_BY_TEN = 'INCREMENT_BY_TEN';
// const DECREMENT_BY_TEN = 'DECREMENT_BY_TEN';
// const RESET = 'RESET';
//
// export const increment = () => ({
//     type: INCREMENT,
// });
//
// export const decrement = () => ({
//     type: DECREMENT,
// });
//
// export const incrementByTen = () => ({
//     type: INCREMENT_BY_TEN,
// });
//
// export const decrementByTen = () => ({
//     type: DECREMENT_BY_TEN,
// });
//
// export const reset = () => ({
//     type: RESET,
// });
//
// const initialState = {
//     value: 0,
// };
//
// const CounterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return { ...state, value: state.value + 1 };
//         case DECREMENT:
//             return { ...state, value: state.value > 0 ? state.value - 1 : 0 };
//         case INCREMENT_BY_TEN:
//             return { ...state, value: state.value + 10 };
//         case DECREMENT_BY_TEN:
//             return { ...state, value: state.value >= 10 ? state.value - 10 : 0 };
//         case RESET:
//             return { ...state, value: 0 };
//         default:
//             return state;
//     }
// };
//
// export default CounterReducer;