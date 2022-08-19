import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../../styles/Register.css";

function Register() {
  const [firstnameReg, setFirstnameReg] = useState("");
  const [lastnameReg, setLastnameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const registerCall = () => {
    Axios.post("/api/register", {
      firstname: firstnameReg,
      lastname: lastnameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="registerPage">
        <Link to="/">
          <button className="signinAndBack">Retour</button>
        </Link>
        <h1 className="registerTitle">
          Créez votre <span>compte</span>
        </h1>
        <form action="" className="registerForm">
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

          <button className="submit" onClick={registerCall}>
            CRÉER VOTRE COMPTE
          </button>
        </form>
      </div>
      <div className="banner"></div>
    </div>
  );
}

export default Register;
