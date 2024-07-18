import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ id, name, username, email }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/users/${id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            style={{
                width: 'calc(50% - 8px)',
                maxWidth: '280px',
                boxSizing: 'border-box',
                padding: '16px',
                boxShadow: '2px 2px 2px 1px rgb(0 0 0 / 20%)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer'
            }}
        >
            <img
                style={{ height: '50px', width: '50px', borderRadius: '50%' }}
                alt=''
                src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-373-456325.png'
            />
            <h1 style={{ fontSize: '16px', margin: '8px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</h1>
            <p style={{ fontSize: '14px', margin: '4px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{username}</p>
            <p style={{ fontSize: '12px', margin: '4px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</p>
        </div>
    );
};

export default UserCard;