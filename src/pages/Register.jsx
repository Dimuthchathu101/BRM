import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Signup.css";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <div className="app-signup">
      <div className="logo">blazer.io</div>
      <div className="login-form">
        <h1>Sign Up</h1>
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
        <div className="text-input ">
          <input
            type="password"
            className="form-control"
            placeholder="Re-enter Password"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-grid gap-1">
        <Link to="/login">
          <button className="btn btn-dark mt-3" type="button">
            Sign up
          </button> </Link>
        </div>
        <hr className="hr" />
        <div className="d-grid gap-1">
        <Link to="/login"><button className="btn btn-outline-dark" type="button">
            Login
          </button></Link>
        </div>
      </div>
    </div>
    </Helmet>
  );
};

export default Register;
