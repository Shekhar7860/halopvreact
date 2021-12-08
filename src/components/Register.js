import React from "react";
import { Form, Button, Image, Row, Col, FloatingLabel } from "react-bootstrap";
import Colors from "../utils/Colors";
import Header from "./Header";

export default function Register() {
  return (
    <>
      <Header/>
      <div style={{ top: 120 }} className="content">
        <div
          style={{ height: 850, width: "60%", marginBottom: 80 }}
          className="box"
        >
          <h3 className="top-font">REGISTER</h3>
          <form>
            <div className="center-container">
              <div className="login-form form-group">
                <label>
                  Are you a Healthcare Professional or a Member of Public?*
                </label>
                <Form.Select aria-label="Floating label select example">
                  <option>Select</option>
                  <option value="1">Health Care Professional</option>
                  <option value="2">Public</option>
                </Form.Select>
              </div>
              <div className="login-form form-group">
                <label>Title</label>
                <Form.Select aria-label="Floating label select example">
                  <option>Select</option>
                  <option value="1">Mr</option>
                  <option value="2">Mrs</option>
                  <option value="2">Miss</option>
                </Form.Select>
              </div>

              <Row className="g-2">
                <Col md>
                  <div className="login-form form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
                <Col md>
                  <div className="login-form form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                  <div className="login-form form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
                <Col md>
                  <div className="login-form form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <div className="login-form form-group">
                    <label>Address Line 1</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
                <Col md>
                  <div className="login-form form-group">
                    <label>Address Line 2</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <div className="login-form form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
                <Col md>
                  <div className="login-form form-group">
                    <label>State</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <div className="login-form form-group">
                    <label>City</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
                <Col md>
                  <div className="login-form form-group">
                    <label>Postal Code</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <div className="login-form form-group">
                    <label>Password</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
                <Col md>
                  <div className="login-form form-group">
                    <label>Confirm Password</label>
                    <input type="text" class="form-control" />
                  </div>
                </Col>
              </Row>
              <Row className="g-2">
                <Col md>
                  <div className="checkbox-fade">
                    <label>
                      <input type="checkbox" id="checkbox" name="remember" />
                      <span class="cr">
                        <i className="orangeColor cr-icon fa fa-check"></i>
                      </span>
                      <span class="text-inverse">
                        I understand the privacy statement
                      </span>
                    </label>
                  </div>
                </Col>

                <Col md>
                  <div className="checkbox-fade">
                    <label>
                      <input type="checkbox" id="checkbox" name="remember" />
                      <span class="cr">
                        <i className="orangeColor cr-icon fa fa-check"></i>
                      </span>
                      <span class="text-inverse">Keep me logged in</span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div style={{ height: 30 }}></div>
              <div className="forgot-pass form-group">
                <button className="login-Btn">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
