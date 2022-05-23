import { React } from "react";
import "./Login.scss";
import Grid from "@mui/material/Grid";
import LoginForm from "../Components/LoginForm";

const Login = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="nowrap"
      className="login"
      maxHeight="md"
    >
      <Grid item md={6} className="login-input_field">
        <LoginForm />
      </Grid>
      <Grid item className="login-image_field"></Grid>
    </Grid>
  );
};
export default Login;
