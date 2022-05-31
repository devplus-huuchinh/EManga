import { React } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginForm.scss';
import PropTypes from 'prop-types';

LoginForm.propTypes = {
  handleLoginSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  handleLoginSubmit: null,
};

function LoginForm(props) {
  const handleLoginSubmit = props;
  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const infoLogin = {
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(infoLogin);
    props.handleLoginSubmit(infoLogin);
  };
  return (
    <Box className='login-form' maxHeight='sm'>
      <Box component='form' onSubmit={handleLogin}>
        <Grid container spacing={2} className='login-grid'>
          <Typography variant='h2'>Login</Typography>
          <Typography variant='p'>
            Welcome back! Please enter your login information.
          </Typography>
          <Grid item>
            <TextField
              type='input'
              className='login-field'
              name='email'
              label='Enter your email address'
              variant='outlined'
              // value={}
              // onChange={}
            />
          </Grid>
          <Grid item>
            <TextField
              type='password'
              className='login-field'
              name='password'
              label='Enter your password'
              variant='outlined'
            />
          </Grid>
          <Grid item>
            <Button type='submit' variant='contained' color='primary'>
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default LoginForm;
