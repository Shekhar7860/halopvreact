import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import Colors from "../utils/Colors";
import logo from "../assets/appLogo.png";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { contains } from "dom-helpers";
export default function VerifyOtp() {
  const navigate = useNavigate();

  const goToReports = (event) =>  {
    event.preventDefault();
    navigate('/Reports')
  }
  return (
    <>
      <Header/>
      <div style={{ top: 120 }} className="content">
        <div style={{ height: 230 }} className="box">
          <h3 className="top-font">VERIFY OTP</h3>
          <form>
            <div className="center-container">
              <div className="login-form form-group">
                <label>OTP</label>
                <input type="text" class="form-control" />
              </div>
              <div className="forgot-pass form-group">
                <button className="login-Btn" onClick={goToReports}>Verify</button>
                <div className="forgot-phone text-right float-right  mt-2">
                  <p className="cursor-pointer orangeColor">Resend OTP</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
