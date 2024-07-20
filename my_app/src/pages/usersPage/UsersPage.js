// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsersAction} from "../../redux/Actions";
// import UserCard from "../../components/UserCard";
//
// const UsersPage = () => {
//     const users = useSelector(state => state.TitleReducer.users);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         dispatch(fetchUsersAction());
//     }, [dispatch]);
//
//     return (
//         <div style={{ textAlign: 'center', padding: '16px' }}>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 flexWrap: 'wrap',
//                 gap: '16px',
//                 maxWidth: '600px',
//                 margin: '0 auto'
//             }}>
//                 {users.map(user => (
//                     <UserCard
//                         key={user.id}
//                         id={user.id}
//                         name={user.name}
//                         username={user.username}
//                         email={user.email}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default UsersPage;