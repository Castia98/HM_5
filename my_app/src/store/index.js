import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainPageSlice';
import calcReducer from './CalcSlice';

export const store = configureStore({
    reducer: {
        main: mainReducer,
        calc: calcReducer
    },
});