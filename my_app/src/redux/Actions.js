// import {Types} from "./Types";
//
// export function changeTitleAction()  {
//     return{
//         type: Types.CHANGE_TITLE
//     }
// }
// export function asyncFunctionAction() {
//     return function () {
//         setTimeout(()=> {
//             alert('Hi')
//         },2000)
//     }
// }
//
// function  getUsersAction(users){
//     return{
//         type: Types.USERS,
//         payload:users
//     }
// }
// export function fetchUsersAction(){
//     return async function (dispatch){
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         dispatch(getUsersAction(data))
//     }
// }