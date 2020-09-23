import React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div id="page-login">
      <div id="page-login-contend" className="container">
        <h1 className="title">Ideal store for your jewelry shopping</h1>
        <hr className="rounded" />
        <div className="buttons-container">
          <button>SIGN UP WITH EMAIL</button>
          <button className="facebook">SIGN UP WITH FACEBOOK</button>
        </div>
        <hr className="rounded" />
      </div>
    </div>
  );
}
