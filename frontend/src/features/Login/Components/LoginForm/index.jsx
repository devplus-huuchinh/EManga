import { React } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginForm.scss";

const LoginForm = (props) => {
  return (
    <Box className="login-form" maxHeight="sm">
      <Grid container spacing={2} className="login-grid">
        <Typography variant="h3">Login</Typography>
        <Typography variant="p">
          Welcome back! Please enter your login information.
        </Typography>
        <Grid item>
          <TextField
            className="login-field"
            id=""
            label="Email"
            variant="outlined"
            // value={}
            // onChange={}
          />
        </Grid>
        <Grid item>
          <TextField className="login-field" id="" label="Password" />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
