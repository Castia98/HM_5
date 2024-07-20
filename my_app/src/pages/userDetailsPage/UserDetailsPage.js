// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
//
// const UserDetailsPage = () => {
//     const { id } = useParams();
//     const [user, setUser] = useState(null);
//
//     useEffect(() => {
//         const fetchUser = async () => {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//             const data = await response.json();
//             setUser(data);
//         };
//
//         fetchUser();
//     }, [id]);
//
//     if (!user) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div style={{ textAlign: 'center', padding: '16px' }}>
//             <img
//                 style={{ height: '100px', width: '100px', borderRadius: '50%' }}
//                 alt=''
//                 src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-373-456325.png'
//             />
//             <h1>{user.name}</h1>
//             <p>Username: {user.username}</p>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <p>Website: {user.website}</p>
//             <p>Company: {user.company.name}</p>
//             <p>Address: {user.address.street}, {user.address.city}</p>
//         </div>
//     );
// };
//
// export default UserDetailsPage;