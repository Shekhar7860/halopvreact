import React from "react";
import { Form, Button, Image } from "react-bootstrap";
import Colors from "../utils/Colors";
import logo from "../assets/appLogo.png";
import dummyprofile from "../assets/dummyprofile.png";

export default function Profile() {
  return (
    <>
      <div style={{ height: 200 }} className="header-background">
        <img className="logoImg" src={logo} rounded />
        <label className="headingText h1">HALOPV</label>
      </div>
      <div style={{ top: 120 }} className="content">
        <div style={{ height: 780 }} className="box">
          <h3 className="top-font">Profile</h3>
          <div className="profileImgDiv">
            <img className="profileImg" src={dummyprofile} />
          </div>
          <div className="profileImgDiv">
            <label>Akash Jacob</label>
          </div>

          <div className="profileImgDiv">
            <div className="cardProfile">
              <div>
                <label className="cardProfileLabel1">Name</label>
              </div>
              <div>
                <label className="cardProfileLabel2">Akash Jacob</label>
              </div>
            </div>
          </div>

          <div className="profileImgDiv">
            <div className="cardProfile">
              <div>
                <label className="cardProfileLabel1">E-mail</label>
              </div>
              <div>
                <label className="cardProfileLabel2">test@testing.com</label>
              </div>
            </div>
          </div>

          <div className="profileImgDiv">
            <div className="cardProfile">
              <div>
                <label className="cardProfileLabel1">Phone Number</label>
              </div>
              <div>
                <label className="cardProfileLabel2">9876543210</label>
              </div>
            </div>
          </div>

          <div className="profileImgDiv">
            <div className="cardProfile">
              <div>
                <label className="cardProfileLabel1">Gender</label>
              </div>
              <div>
                <label className="cardProfileLabel2">Male</label>
              </div>
            </div>
          </div>

          <div className="profileImgDiv">
            <div className="cardProfile">
              <div>
                <label className="cardProfileLabel1">Country</label>
              </div>
              <div>
                <label className="cardProfileLabel2">India</label>
              </div>
            </div>
          </div>

          <div className="profileImgDiv">
            <div className="cardProfile">
              <div>
                <label className="cardProfileLabel1">City</label>
              </div>
              <div>
                <label className="cardProfileLabel2">Mohali</label>
              </div>
            </div>
          </div>

          <div className="profileImgDiv">
            <div className="cardProfile">
              <div>
                <label className="cardProfileLabel1">Address</label>
              </div>
              <div>
                <label className="cardProfileLabel2">
                  234, sector 8, Mohali
                </label>
              </div>
            </div>
          </div>
          <div style={{ height: 80 }}></div>
        </div>
      </div>
    </>
  );
}
