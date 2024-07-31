// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../store/UsersSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, Spinner, Alert, ListGroup } from 'react-bootstrap';
//
// const UserList = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const users = useSelector((state) => state.users.users);
//     const status = useSelector((state) => state.users.status);
//     const error = useSelector((state) => state.users.error);
//
//     useEffect(() => {
//         if (status === 'idle') {
//             dispatch(fetchUsers());
//         }
//     }, [status, dispatch]);
//
//     const handleCardClick = (id) => {
//         navigate(`/users/${id}`);
//     };
//
//     let content;
//
//     if (status === 'loading') {
//         content = <Spinner animation="border" />;
//     } else if (status === 'succeeded') {
//         content = (
//             <ListGroup>
//                 {users.map((user) => (
//                     <ListGroup.Item
//                         key={user.id}
//                         action
//                         onClick={() => handleCardClick(user.id)}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <div className="d-flex w-100 justify-content-between">
//                             <h5 className="mb-1">{user.name}</h5>
//                             <small>{user.email}</small>
//                         </div>
//                     </ListGroup.Item>
//                 ))}
//             </ListGroup>
//         );
//     } else if (status === 'failed') {
//         content = <Alert variant="danger">{error}</Alert>;
//     }
//
//     return (
//         <div>
//             <h2>Users</h2>
//             {content}
//         </div>
//     );
// };
//
// export default UserList;