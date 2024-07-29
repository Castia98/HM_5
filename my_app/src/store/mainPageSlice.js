// import {createSlice} from "@reduxjs/toolkit"
//
// const mainSlice = createSlice({
//     name: 'mainSLice',
//     initialState: {
//         title: 'GeekTech',
//         inputValue: '',
//         users:[]
//     },
//     reducers: {
//         changeTitle:(state, action) => {
//             state.title = 'Geeks!'
//         },
//         changeTitleWithParams:(state, action) => {
//             state.title = action.payload
//         },
//         changeInput:(state, action) => {
//             state.inputValue = action.payload
//         },
//         addUsers:(state, action) => {
//             state.users.push(action.payload)
//         }
//     }
// })
//
// export const {changeTitle, changeTitleWithParams, changeInput, addUsers} = mainSlice.actions
//
// export default mainSlice.reducer