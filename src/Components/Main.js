import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import InputComponent from './InputComponent';
import ReportComponent from './ReportComponent';
import Operacion from './Operacion';

const users = [
  { username: 'user1', password: 'pw1' },
  { username: 'user2', password: 'pw2' },
];

const Main = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setLoggedInUser(user.username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      {loggedInUser ? (
          <Operacion />
        )
       : (
        <form onSubmit={handleLogin}>
          <Typography variant="h4">Login</Typography>
          <TextField label="Username" name="username" fullWidth margin="normal" />
          <TextField label="Password" type="password" name="password" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
      )}
    </Container>
  );
};

export default Main;
