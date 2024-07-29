// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
//
// export const getPosts = createAsyncThunk(
//     'getPosts',
//     async function (_, {dispatch}) {
//
//         try {
//             dispatch(preloaderOn())
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//             const posts = await response.json()
//             dispatch(postsInfo(posts))
//
//             if(response.status === 404) {
//                 dispatch(setMessage('404 Not found!'))
//             }
//         }catch (error){
//             console.log(error)
//         }finally {
//             dispatch(preloaderOff())
//         }
//
//     }
// )
//
//
// export const createPost = createAsyncThunk (
//     'createPost',
//     async function (info, {dispatch}) {
//
//         try {
//             dispatch(preloaderOn())
//             const options = {
//                 method: 'POST',
//                 headers:{
//                     'Content-Type': 'application/json'
//                 },
//                 body:JSON.stringify(info)
//             }
//             const response = await fetch ('https://jsonplaceholder.typicode.com/posts', options)
//             if(response.status >=200 && response.status <=204) {
//                 dispatch(setMessage('Post created'))
//             }else if (response.status === 404 ){
//                 dispatch(setMessage('404 Not Found!'))
//             }
//         }catch(e) {
//             dispatch(setMessage(e))
//         }finally {
//             dispatch(preloaderOff())
//         }
//
//     }
// )
// const  postsSlice = createSlice({
//     name: 'postsSlice',
//     initialState: {
//         posts: [],
//         preloader: false,
//         message:''
//     },
//     reducers:{
//         postsInfo: (state, action) => {
//             state.posts = action.payload
//         },
//         preloaderOn:(state, action) => {
//             state.preloader= true
//         },
//         preloaderOff:(state, action) => {
//             state.preloader= false
//         },
//         setMessage:(state, action) => {
//             state.message= action.payload
//         }
//     }
// })
//
// export const {postsInfo, preloaderOn, preloaderOff, setMessage} = postsSlice.actions
//
// export default postsSlice.reducer
