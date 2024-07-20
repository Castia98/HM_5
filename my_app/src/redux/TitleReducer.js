// import {Types} from "./Types";
//
// const initialState ={
//     title: "Life Is An Endless Pain",
//     // aboutTitle: 'Life Is An Endless Pain',
//     contactsTitle: '',
//     users: []
// }
// export default function TitleReducer(state= initialState,action) {
//     if(action.type === 'CHANGE_TITLE'){
//         return {...state, title: 'And Death Is a Brief Joy'}
//     // } else if (action.type === 'CHANGE_ABOUT_TITLE'){
//     //     return {...state, aboutTitle: 'And Death Is a Brief Joy'}
//     }else if (action.type === "WITH_PARAMS"){
//         return {...state, contactsTitle: action.payload}
//     }else if (action.type === 'FROM_INPUT'){
//         return {...state,contactsTitle: action.payload}
//     }else if (action.type === Types.USERS) {
//         return {...state, users: action.payload}
//     }return state
// }