import React from "react";
import logo from "../assets/appLogo.png";
import { useNavigate } from 'react-router-dom';
export default function Header({showRegister, registerClick}) {
  const navigate = useNavigate();
  return <div className="header-background">
    <div onClick={()=> navigate('/')}>
  <img className="logoImg" src={logo} rounded />
  <label className="headingText h1">HALOPV</label>
  </div>
  {showRegister ? 
  <button className="registerBtn" onClick={registerClick}>Register</button>
  : null}
</div>;
}
