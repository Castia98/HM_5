import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = () => {
        if (!name || !email || !number || !password || !confirmPassword) {
            setErrorMessage('All fields must to be filled.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('The passwords are different.');
            return;
        }
        const userExists = registeredUsers.some(user => user.email === email);
        if (userExists) {
            setErrorMessage(' This user already exists.');
            return;
        }
        const newUser = { name, email, number };
        setRegisteredUsers([...registeredUsers, newUser]);

        console.log("Registered users:", [...registeredUsers, newUser]);

        setName('');
        setEmail('');
        setNumber('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
    };

    return (
        <Container>
            <h1>Registration</h1>
            <TextField
                label='Name'
                variant='outlined'
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
                margin='normal'
            />
            <TextField
                label='Email'
                variant='outlined'
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                margin='normal'
            />
            <TextField
                label='Phone number'
                variant='outlined'
                value={number}
                onChange={e => setNumber(e.target.value)}
                fullWidth
                margin='normal'
            />
            <TextField
                label='Password'
                type='password'
                variant='outlined'
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                margin='normal'
            />
            <TextField
                label='Confirm password'
                type='password'
                variant='outlined'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                fullWidth
                margin='normal'
            />
            {errorMessage && (
                <Typography color='error' variant='body2'>
                    {errorMessage}
                </Typography>
            )}
            <Button variant='contained' color='primary' onClick={handleRegister}>
                Sign up
            </Button>
        </Container>
    );
};

export default ContactPage;