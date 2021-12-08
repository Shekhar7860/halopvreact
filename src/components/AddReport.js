import React, {useState} from "react";
import {
  Form,
  Button,
  Image,
  Row,
  Col,
  FloatingLabel,
  ListGroup,
} from "react-bootstrap";
import Colors from "../utils/Colors";
import logo from "../assets/appLogo.png";
import greaterthan from "../assets/greaterthan.png";
import add from "../assets/add.png";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
const initialData = {
 describe : "",
 report : ""
}
export default function AddReport() {
const [state, setState] = useState(initialData)
const navigate = useNavigate();
 const toggleSelect = (e, type) => {
   if(type == 'describe')
   {
  setState({...state, describe : e.target.value})
   }
   else {
    setState({...state,  report : e.target.value})
   }
  }

  const goToDetails = () => {
    navigate('/ReportDetails')
  }
  return (
    <>
    <Header/>
      <div style={{ top: 120 }} className="content">
        <div style={{ height: 450, marginBottom: 50 }} className="box">
          <h3 className="top-font">NEW REPORT</h3>

          <form>
            <div className="center-container">
              <div className="login-form form-group">
                <label>What best describes you?</label>
                <Form.Select aria-label="Floating label select example" 
                value={state.describe}
                onChange={e => {  toggleSelect(e, 'describe')}}>
                  <option>Please select</option>
                  <option value="1">Health Care Professional</option>
                  <option value="2">Public</option>
                </Form.Select>
              </div>
              <div className="login-form form-group">
                <label>What are you reporting about?</label>
                <Form.Select aria-label="Floating label select example" onChange={e => {  toggleSelect(e, 'report')}}  value={state.report}>
                  <option>Please select</option>
                  <option value="1">Medicines or Vaccines </option>
                  <option value="2">Devices</option>
                </Form.Select>
              </div>

              {state.describe != "" && state.report != "" ?
              <>
              <label className="small">
                What would you like to tell us about?
              </label>

              <ListGroup as="ol" numbered>
                <ListGroup.Item onClick={goToDetails}
                  //   as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    Report a suspected side effect to a COVID-19 vaccine.
                  </div>
                  <img className="photo photoImg" src={greaterthan}></img>
                </ListGroup.Item>
                <ListGroup.Item
                  //   as="li"
                  onClick={goToDetails}
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    Report a suspected side effect to a medicine used to treat
                    COVID-19.
                  </div>
                  <img className="photo photoImg" src={greaterthan}></img>
                </ListGroup.Item>
                <ListGroup.Item
                onClick={goToDetails}
                  //   as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    Report a suspected side effect to a medicine.
                  </div>
                  <img className="photo photoImg" src={greaterthan}></img>
                </ListGroup.Item>
              </ListGroup>
              </> : null}

              <div style={{ height: 30 }}></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
