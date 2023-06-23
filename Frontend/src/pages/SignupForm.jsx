import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Validation from "./Validation";

import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
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
    const validationErrors = Validation(values);
    setError(validationErrors);

    const password_check =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (values.password.length > 8 && password_check.test(values.password)) {
      setIsSubmit(true);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/loginForm");
      }, 1000);
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
              onChange={HandleValues}
              value={values.password}
              required
            />
          </Box>

          {error.password && (
            <Box sx={{ color: "red", textAlign: "left", marginLeft: "10px" }}>
              {error.password}
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
