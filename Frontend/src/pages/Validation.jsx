// import React, { Fragment } from 'react';

const Validation = (values) => {
  let error = {};
  const email_check =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const password_check =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.firstName === "") {
    error.firstName = "First Name should not be empty";
  }
  if (values.lastName === "") {
    error.lastName = "Last Name should not be empty";
  }
  if (values.email === "") {
    error.email = "email should not be empty";
  }
  if (!email_check.test(values.email)) {
    error.emailvalidity = "Email didn't match";
  }
  if (!password_check.test(values.password)) {
    error.password = "Password didn't match our policy";
  } else {
    error.password = "";
  }
  return error;
};

export default Validation;
