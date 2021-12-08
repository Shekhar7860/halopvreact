import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import Colors from "../utils/Colors";
import logo from "../assets/appLogo.png";

export default function Forgot() {
  return (
    <>
      <div style={{ height: 200 }} className="header-background">
        <img className="logoImg" src={logo} rounded />
        <label className="headingText h1">HALOPV</label>
      </div>
      <div style={{ top: 120 }} className="content">
        <div style={{ height: 230 }} className="box">
          <h3 className="top-font">FORGOT PASSWORD</h3>
          <form>
            <div className="center-container">
              <div className="login-form form-group">
                <label>Email</label>
                <input type="text" class="form-control" />
              </div>
              <div className="forgot-pass form-group">
                <button className="login-Btn">Forgot</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
