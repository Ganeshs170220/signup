import React from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";


import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [values, SetValues] = useState({
    email: "",
    password: "",
  });

  const HandleValues = (e) => {
    SetValues({ ...values, [e.target.name]: e.target.value });
  };
  const usermail = "ganeshguntuku2002@gmail.com";
  const userPassword = "Ganesh@123";

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
    console.log(values);
    if (values.email !== usermail) {
      setEmailCheck(true);
      setIsSubmit(false);
    }
    if (values.password !== userPassword) {
      setPasswordCheck(true);
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
      setEmailCheck(false);
      setPasswordCheck(false);
      // setOpen(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <Fragment>
      <form action="" onSubmit={HandleSubmit}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "30vh",
          }}
        >
          {isSubmit && alert("login successfull click OK to redirect")}
          <Container>
            <style>{"body { background-color: #001C30; }"}</style>
            <SignUpTitle>Sign In</SignUpTitle>

            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "42ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-required"
                type="email"
                label="Email Address"
                name="email"
                value={values.email}
                required
                onChange={HandleValues}
              />
            </Box>

            {emailCheck && (
              <Box sx={{ color: "red", textAlign: "left", marginLeft: "10px" }}>
                Email doesn't exists
              </Box>
            )}
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "42ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-required"
                type="password"
                label="Password"
                required
                name="password"
                value={values.password}
                onChange={HandleValues}
              />
            </Box>
            {passwordCheck && (
              <Box sx={{ color: "red", textAlign: "left", marginLeft: "10px" }}>
                Password wrong
              </Box>
            )}
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "48ch" },
              }}
            >
              <Button variant="contained" type="submit">
                Sign In
              </Button>
            </Box>
            <Box
              sx={{
                paddingBottom: "5vh",
                paddingTop: "10px",
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                margin: "auto",
              }}
            >
              <Box>
                <Link to={"/loginform"}>Forget Password</Link>
              </Box>
              <Box>
                Don't have an account?<Link to={"/signupform"}>Sign up</Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </form>
    </Fragment>
  );
};
const SignUpTitle = styled("div")({
  fontSize: "25px",
  fontWeight: "700",
  marginBottom: "15px",
  paddingTop: "5vh",
});
const Container = styled("div")({
  margin: "auto",
  paddingLeft: "20px",
  paddingRight: "20px",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: "10px",
});

export default LoginForm;
