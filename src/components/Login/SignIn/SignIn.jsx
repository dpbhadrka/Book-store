// SignIn Page which takes Email and Password for login purpose.
// If given credentials are right/true then we redirect to Home page else giving error like wrong credentials or Register first.
// Also we redirect to SignUp page for creating account.

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../context/ContextProvider";
import { useContext } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        BookHub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn({ whichForm }) {
  // For redirecting to home page When signIn successful.
  const navigateToHome = useNavigate();
  const { userRole, setUserRole } = useContext(Context);

  // handle submit when user click on the SignIn button.
  const handleSubmit = (event) => {
    event.preventDefault();

    // Geting the data from the form.
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // Sending post request for checking the credentials and getting response.
    axios
      .post("http://localhost:8080/api/users/userLogin", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.data == "Login Successful") {
          toast.success(response.data.data);
          setUserRole(response.data.role);
          console.log(response.data.role);

          // After successful login we redirect user to Home page.
          if (response.data.role === "Admin") {
            navigateToHome("/");
          } else if (response.data.role === "User") {
            setTimeout(() => {
              navigateToHome("/");
            }, 2500);
          } else {
            response.preventDefault();
            console.log("this is an error.");
          }
        } else {
          toast.error("Do Register first or Wrong credentials.");
        }
      });
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="off"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={() => {
                    whichForm("forgotPassword");
                  }}
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => whichForm("signup")}
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <ToastContainer position="top-center" autoClose={1300} />
    </ThemeProvider>
  );
}
