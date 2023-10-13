import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "./Login.css";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from "./Register";
import Layout from "../components/Layout/Layout";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <div className="app-login">
      <div className="logo">blazer.io</div>
      <div className="login-form">
        <h1>Login</h1>
        <div className="text-input">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="text-input ">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-grid gap-1">
        <Link to="/home">
          <button className="btn btn-dark mt-3" type="button">
            Sign in
          </button> </Link>
        </div>
        <hr className="hr" />
        <div className="d-grid gap-1">
          
          <Link to="/register"><button className="btn btn-outline-dark" type="button">
            Sign up
          </button></Link>
         
        </div>
      </div>
    </div>
    </Helmet>
  );
};

export default Login;
