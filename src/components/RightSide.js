import React from "react";
import "../styles/RightSide.css";

const RightSide = () => {
  return (
    <div className="rightside">
      <p className="signin">S'inscrire</p>
      <div className="login">
        <h1 className="logintitle">Brand name</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <form action="submit">
          <input type="email" placeholder="Adresse mail" />
          <input type="password" placeholder="Mot de passe" />
          <p className="forgot">Mot de passe oublié ?</p>
          <button>SE CONNECTER</button>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
