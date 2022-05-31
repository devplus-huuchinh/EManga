import { React } from "react";
import "./Login.scss";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Auth from "../../../api/authApi";
import LoginForm from "../Components/LoginForm";

const Login = (props) => {
  const handleLoginSubmit = async (data) => {
    try {
      console.log("ok");
      await Auth.csrfCookie();
      const response = await Auth.login(data);
      localStorage.setItem("access_token", response.access_token);
      if (!response.access_token)
        return (
          <Alert severity="error">
            <AlertTitle>Incorrect username or password</AlertTitle>
          </Alert>
        );
      return (window.location = "/");
    } catch (error) {
      console.log(error);
    }
  };
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
        <LoginForm handleLoginSubmit={handleLoginSubmit} />
      </Grid>
      <Grid item className="login-image_field"></Grid>
    </Grid>
  );
};
export default Login;
