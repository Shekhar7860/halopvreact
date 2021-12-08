import React from "react";
import {
  Form,
  Button,
  Image,
  Row,
  Col,
  FloatingLabel,
  ListGroup,
  Badge,
} from "react-bootstrap";
import logo from "../assets/appLogo.png";
import greaterthan from "../assets/greaterthan.png";
import add from "../assets/add.png";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
export default function Reports() {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate('/ReportDetails')
  }
  return (
    <>
      <Header/>
      <div style={{ top: 120 }} className="content">
        <div style={{ height: "auto", width: "65%" }} className="box">
          <h3 className="top-font">REPORTS</h3>
          <ListGroup as="ol" numbered>
            <ListGroup.Item onClick={goToDetails}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Report 1</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <img className="photo photoImg" src={greaterthan}></img>
            </ListGroup.Item>
            <ListGroup.Item
            onClick={goToDetails}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Report 2</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <img className="photo photoImg" src={greaterthan}></img>
            </ListGroup.Item>
            <ListGroup.Item
            onClick={goToDetails}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Report 3</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <img className="photo photoImg" src={greaterthan}></img>
            </ListGroup.Item>

            <ListGroup.Item
            onClick={goToDetails}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Report 4</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <img className="photo photoImg" src={greaterthan}></img>
            </ListGroup.Item>

            <ListGroup.Item
            onClick={goToDetails}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Report 5</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <img className="photo photoImg" src={greaterthan}></img>
            </ListGroup.Item>
          </ListGroup>

          <div style={{ height: 30 }}></div>
          <div
            style={{ height: 80, display: "flex", justifyContent: "flex-end" }}
            onClick={() => navigate('/AddReport')}
          >
            <img className="photo photoImg" src={add}></img>
          </div>
        </div>
      </div>
    </>
  );
}
