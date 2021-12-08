import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import Colors from "../utils/Colors";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  function NewMeetupForm() {}

  function submitHandler(event) {
    event.preventDefault();
    navigate('/Reports')
  }

  const goToScreen = (param) => {
    if(param == 'register')
    {
      navigate('/Register')
    }
    else {
      navigate('/ResetPassword')
    }
  }

  return (
    <>
      <Header showRegister={true} registerClick={ () => goToScreen('register')}/>
      <div className="content">
        <div className="box">
          <h3 className="top-font">Sign In</h3>
          <form onSubmit={submitHandler}>
            <div className="center-container">
              <div className="login-form form-group">
                <label>Email / Mobile Number</label>
                <input type="text" class="form-control" />
              </div>
              <div className="login-form form-group">
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label>Password</label>
                    <input
                      type={"password"}
                      placeholder="•••••••••••••••••"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="forgot-pass form-group">
                <div className="checkbox-fade">
                  <label>
                    
                    <span class="cr">
                    <input type="checkbox" id="checkbox" name="remember"/>
                    </span>
                    <span class="text-inverse">Remember me</span>
                  </label>
                </div>
                <div className="forgot-phone text-right float-right" onClick={() => goToScreen("forgot")}>
                  <p className="cursor-pointer orangeColor">Forgot password?</p>
                </div>
                <button className="login-Btn" type="submit">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
