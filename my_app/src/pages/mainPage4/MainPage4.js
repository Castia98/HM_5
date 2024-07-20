import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleWithParams} from "../../store/mainPageSlice";

const MainPage4 = () => {

    const title = useSelector(state => state.mainReducer.title)
    const dispatch = useDispatch()

    const changeMainTitle = () => {
        dispatch(changeTitle())
    }

    const changeMainTitleWithParams = () => {
        dispatch(changeTitleWithParams('Hell!'))
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeMainTitle}>change title</button>
            <button onClick={changeMainTitleWithParams}>change title with params</button>
        </div>
    );
};

export default MainPage4;