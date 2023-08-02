import SignIn from "../../components/Login/SignIn/SignIn";
import SignUp from "../../components/Login/SignUp/SignUp";

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
      ) : (
        <SignUp whichForm={whichForm} />
      )}
    </>
  );
}
