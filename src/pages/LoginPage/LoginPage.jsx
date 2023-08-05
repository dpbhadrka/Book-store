// This is the Login page where user can SignIn,SignUp or get password using Forgot password.

import SignIn from "../../components/Login/SignIn/SignIn";
import SignUp from "../../components/Login/SignUp/SignUp";
import ForgotPassword from "../../components/Login/ForgotPassword/ForgotPassword";
import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState("signin");
  const whichForm = (value) => {
    setForm(value);
  };
  return (
    <>
      {form === "signin" ? (
        <SignIn whichForm={whichForm} />
      ) : form === "signup" ? (
        <SignUp whichForm={whichForm} />
      ) : (
        <ForgotPassword whichForm={whichForm} />
      )}
    </>
  );
}
