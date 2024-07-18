import {types} from "./Types3";

function preloaderOn(){
    return{
        type:types.PRELOADER_ON
    }
}
function preloaderOff(){
    return{
        type:types.PRELOADER_OFF
    }
}

export function addUserAction(user) {
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)

        if(response.status === 404){
            dispatch(preloaderOff())
            alert ('error 404 not found')
        }
        if(response.status >= 200 && response.status <=204){
            dispatch(preloaderOff())
            alert ('successfully')
        }

        dispatch(preloaderOff())
    }
}