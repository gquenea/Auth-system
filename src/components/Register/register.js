import React, { useState } from "react";
import App from "../app";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const registerCall = () => {
    axios
      .post("http://localhost3001/api/register", {
        firstname: firstnameReg,
        lastname: lastnameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => {
            setFirstnameReg(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={(e) => {
            setLastnameReg(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        {/* <input type="password" placeholder="Confirm Password" /> */}

        <button onClick={registerCall}>Créer un compte</button>
      </form>
      <Link to="/">
        <button>Retour</button>
      </Link>
    </div>
  );
}

export default Register;
