import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const UserDetail = () => {
    const { id } = useParams();
    const user = useSelector((state) =>
        state.users.users.find((user) => user.id === parseInt(id))
    );

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <Card style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <Card.Header as="h5">{user.name}</Card.Header>
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                    <strong>Email:</strong> {user.email}
                </Card.Text>
                <Card.Text>
                    <strong>Phone:</strong> {user.phone}
                </Card.Text>
                <Card.Text>
                    <strong>Website:</strong> {user.website}
                </Card.Text>
                <Card.Text>
                    <strong>Company:</strong> {user.company.name}
                </Card.Text>
                <Card.Text>
                    <strong>Address:</strong> {`${user.address.street}, ${user.address.city}`}
                </Card.Text>
                <Button variant="primary" onClick={() => window.history.back()}>
                    Go Back
                </Button>
            </Card.Body>
        </Card>
    );
};

export default UserDetail;