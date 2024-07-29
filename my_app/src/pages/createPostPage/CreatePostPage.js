// import React, {useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {createPost} from "../../store/PostsSlice";
//
// const CreatePostPage = () => {
//
//     const {message} =useSelector(state =>state.postsReducer )
//
//     const [form,setForm] = useState({})
//     const dispatch = useDispatch()
//
//     const changeForm = (event) => {
//         setForm({...form,[event.target.name]:event.target.value})
//     }
//
//     const submit = (e) => {
//         e.preventDefault()
//         dispatch(createPost(form))
//     }
//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <input type='text' name='title' onChange={changeForm}/>
//                 <textarea cols='30' rows='10' name='body' onChange={changeForm} />
//                 <button>create post</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };
//
// export default CreatePostPage;