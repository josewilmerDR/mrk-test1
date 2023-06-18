import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import MyAccount from "../pages/myAccount.jsx";

const ExampleApp = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dasbord</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/purchases">Purchases</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<MyAccount />} />
        <Route path="/purchases" element={<Register />} />
      </Routes>
    </div>
  </Router>
);

export default ExampleApp;
