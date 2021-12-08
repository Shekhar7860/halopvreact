import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import Colors from "../utils/Colors";
import logo from "../assets/appLogo.png";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
export default function ResetPassword() {
  const navigate = useNavigate();


  const submitReset = (event) =>{
    event.preventDefault();
    navigate('/VerifyOtp')
  }
  return (
    <>
      <Header/>
      <div style={{ top: 120 }} className="content">
        <div style={{ height: 300 }} className="box">
          <h3 className="top-font">RESET PASSWORD</h3>
          <form onSubmit={submitReset}>
            <div className="center-container">
              <div className="login-form form-group">
                <label>Password</label>
                <input type="text" class="form-control" />
              </div>
              <div className="login-form form-group">
                <label>Confirm Password</label>
                <input type="text" class="form-control" />
              </div>
              <div className="forgot-pass form-group">
                <button className="login-Btn" type="submit">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
