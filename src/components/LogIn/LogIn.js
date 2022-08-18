import React, { useState, useEffect } from "react";
import "../../styles/Home.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Register from "../Register/register";

async function logInUser(credentials) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LogIn({ setToken }) {
  const [email, setEmail] = useState();
  const [passhash, setPasshash] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await logInUser({
      email,
      passhash,
    });
    setToken(token);
  };

  return (
    <div className="main">
      <div className="leftside">
        <div className="title">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Culpa ex minus voluptatem deserunt eligendi cum?
          </p>
        </div>
        <div className="socialmedia">
          <img src="logos/twitter.png" alt="logo twitter" />
          <img src="logos/facebook.png" alt="logo de facebook" />
          <img src="logos/instagram.png" alt="logo d'instagram" />
        </div>
      </div>
      <div className="rightside">
        <Link to="/register" className="signin">
          <button className="signin">S'inscrire</button>
        </Link>
        <div className="login">
          <h1 className="logintitle">Brand name</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Adresse mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setPasshash(e.target.value)}
            />
            <p className="forgot">Mot de passe oublié ?</p>
            <button type="submit">SE CONNECTER</button>
          </form>
        </div>
      </div>
    </div>
  );
}

LogIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LogIn;
