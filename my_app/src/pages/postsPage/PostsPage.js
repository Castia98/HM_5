// import React, {useEffect} from 'react';
// import {Button} from "react-bootstrap";
// import {useDispatch, useSelector} from "react-redux";
// import {getPosts, setMessage} from "../../store/PostsSlice";
// import PostsCard from "../../components/PostsCard";
// import {Spinner} from "react-bootstrap";
//
// const PostsPage = () => {
//
//     const {posts, preloader, message} = useSelector(state =>state.postsReducer)
//     const dispatch = useDispatch()
//
//     useEffect(() => {
//         dispatch(getPosts())
//     }, []);
//
//
//     console.log(posts)
//     return (
//         <div>
//             {
//                 preloader
//                     ? <Spinner animation = 'grow'/>
//                     : message ? <p>{message}</p>
//                     : <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
//                         {posts.map((post)=><PostsCard postInfo={post}/>)}
//                     </div>
//             }
//         </div>
//
//     );
// };
//
// export default PostsPage;