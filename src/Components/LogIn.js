import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Home.css";

function LogIn() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const handleSubmit = () =>
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: userName,
        password: password,
      })
      .then((res) => {
        if ((res.status === 200)) {
          navigate("/shoes");
        }
      });
  return (
    <div className="LoginContainer">
      <div className="logininfo">
        <p>LOGIN</p>
      </div>
      <div className="input">
        <label htmlFor="">User Name</label>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="">Password</label>
        <input
          type="Password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input">
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
}

export default LogIn;
