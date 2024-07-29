import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from './mainPageSlice';
// import calcReducer from './CalcSlice';
// import postsReducer from './PostsSlice'
import usersReducer from "./UsersSlice";
export const store = configureStore({
    reducer: {
        // main: mainReducer,
        // calc: calcReducer
        // postsReducer
        users: usersReducer
    },
});