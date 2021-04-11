import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { register } from 'redux/auth/auth-operations';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

export default function SignupView() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      name,
      email,
      password,
    };

    dispatch(register(credentials));
  };

  return (
    <Container size="sm">
      <Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
        SignUp
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={e => setName(e.target.value)}
          label="User Nickname"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          onChange={e => setEmail(e.target.value)}
          type="email"
          label="User Email"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          onChange={e => setPassword(e.target.value)}
          type="password"
          label="User Password"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          SignUp
        </Button>
      </form>
    </Container>
  );
}
