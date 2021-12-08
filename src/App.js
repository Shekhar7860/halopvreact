import "./App.css";
// import Images from "./utils/Images";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import VerifyOtp from "./components/VerifyOtp";
import ResetPassword from "./components/ResetPassword";
import Register from "./components/Register";
import Reports from "./components/Reports";
import Profile from "./components/Profile";
import AddReport from "./components/AddReport";
import ReportDetails from "./components/ReportDetails";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/Forgot" element={<Forgot />}></Route>
          <Route exact path="/VerifyOtp" element={<VerifyOtp />}></Route>
          <Route
            exact
            path="/ResetPassword"
            element={<ResetPassword />}
          ></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Reports" element={<Reports />}></Route>
          <Route exact path="/Profile" element={<Profile />}></Route>
          <Route exact path="/AddReport" element={<AddReport />}></Route>
          <Route exact path="/ReportDetails" element={<ReportDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
