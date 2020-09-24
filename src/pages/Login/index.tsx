import React from "react";
import FacebookButton from "../../components/FacebookButton";
import "./styles.css";

export default function Login() {
  return (
    <div id="page-login">
      <div id="page-login-contend" className="container">
        <h1 className="title">Ideal store for your jewelry shopping</h1>
        <hr className="rounded" />
        <div className="buttons-container">
          <button>SIGN UP WITH EMAIL</button>
          <FacebookButton title="SIGN UP WITH FACEBOOK" />
        </div>
        <hr className="rounded" />
      </div>
    </div>
  );
}
