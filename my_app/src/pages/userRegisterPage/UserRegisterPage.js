import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../redux/Actions3";

const UserRegisterPage = () => {
    const dispatch = useDispatch();
    const preloader = useSelector(state => state.preloader);

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    });

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    const validateName = (name) => {
        const regex = /^[A-Za-z]+$/;
        return regex.test(name);
    }

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const addUser = (event) => {
        event.preventDefault();

        if (!validateName(user.name)) {
            alert('Name should contain only letters');
            return;
        }

        if (!validateEmail(user.email)) {
            alert('Email is not valid');
            return;
        }

        dispatch(addUserAction(user));
    }

    return (
        <Container>
            {preloader ? <Spinner animation="border" variant="primary" /> :
                <Form onSubmit={addUser}>
                    <Row>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId='name'>
                                <Form.Control
                                    type='text'
                                    placeholder='name'
                                    name='name'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId='username'>
                                <Form.Control
                                    type='text'
                                    placeholder='username'
                                    name='username'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className='mb-3' controlId='email'>
                                <Form.Control
                                    type='text'
                                    placeholder='email'
                                    name='email'
                                    onChange={formValue}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Button type='submit' variant='success' className='w-100'>register user</Button>
                        </Col>
                    </Row>
                </Form>
            }
        </Container>
    );
};

export default UserRegisterPage;