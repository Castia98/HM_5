import React from 'react';
import {useDispatch} from "react-redux";
import {asyncFunctionAction} from "../../redux/Actions";

const AboutPage = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={()=> {dispatch(asyncFunctionAction())}}>after 2 sec</button>
    );
};

export default AboutPage;