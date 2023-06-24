import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Validation from "./Validation";
import PasswordStrengthBar from "react-password-strength-bar";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const navigate = useNavigate();
  // const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const HandleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
    const password_check =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.length > 8 && password_check.test(password)) {
      setIsSubmit(true);
      
      setTimeout(() => {
        setPasswordCheck(false)
        navigate("/loginForm");
      }, 1000);
    } else {
      setPasswordCheck(true);
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {isSubmit && alert("submitted successfully")}

        <Container>
          <style>{"body { background-color: #001C30; }"}</style>
          <SignUpTitle>Sign Up</SignUpTitle>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Box display={"flex"}>
                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "20ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    name="firstName"
                    id="outlined-required"
                    label="First Name"
                    required
                    onChange={HandleValues}
                    value={values.firstName}
                  />
                </Box>

                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "20ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    name="lastName"
                    id="outlined-required"
                    label="Last Name"
                    required
                    onChange={HandleValues}
                    value={values.lastName}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "42ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name="email"
              id="outlined-required"
              type="email"
              label="Email Address"
              required
              onChange={HandleValues}
              value={values.email}
            />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "42ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name="password"
              id="outlined-required"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <PasswordStrengthBar password={password}/>
          </Box>

          {passwordCheck && (
            <Box sx={{ color: "red", textAlign: "left", marginLeft: "10px" }}>
              Password didn't match our policy
            </Box>
          )}

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "48ch" },
            }}
          >
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </Box>
          <Box sx={{ paddingBottom: "5vh", paddingTop: "10px" }}>
            Already have an account?<Link to={"/loginform"}>Sign in</Link>
          </Box>
        </Container>
      </Box>
    </form>
  );
};
const SignUpTitle = styled("div")({
  fontSize: "25px",
  fontWeight: "700",
  marginBottom: "15px",
  paddingTop: "5vh",
});
const Container = styled("div")({
  textAlign: "center",
  backgroundColor: "white",
  marginTop: "25vh",
  borderRadius: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
});

export default SignupForm;
