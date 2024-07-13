import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../../redux/Actions';
import UserCard from '../../components/UserCard';

const UsersPage = () => {
    const users = useSelector(state => state.TitleReducer.users);
    const dispatch = useDispatch();

    const handleCardClick = async (userId) => {
        try {
            await dispatch(fetchUsersAction(userId));
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '16px' }}>
            <button
                style={{ marginBottom: '16px', padding: '8px 16px', cursor: 'pointer' }}
                onClick={() => { dispatch(fetchUsersAction()) }}
            >
                Get Users
            </button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                {users.map(user => (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        onClick={() => handleCardClick(user.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default UsersPage;