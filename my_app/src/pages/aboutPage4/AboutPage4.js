import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUsers, changeInput} from "../../store/mainPageSlice";

const AboutPage4 = () => {
    const {inputValue, users} = useSelector(state => state.mainReducer)
    const dispatch = useDispatch()

    console.log(users,)
    return (
        <div>
           {/*<h1>{inputValue}</h1>*/}
            <input type="text" onChange={(event)=> dispatch(changeInput(event.target.value))}/>
            <button onClick={()=> dispatch(addUsers(inputValue))}>add user</button>
            {users.map((user)=>
                <p>{user}</p>
            )}
        </div>
    );
};

export default AboutPage4;