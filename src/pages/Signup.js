import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    const signup = {
      email: email,
      password: password,
    };
    let result = await axios.post(
      "http://18.117.158.204:8081/user/signup",
      signup
    );
    console.log("result", result);
    if (result.data === "Duplicate user") {
      setError("User is already signed up");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {/* // TODO: add validation for fields
      //TODO: add backgound image for page */}
      <h1>Sign Up</h1>
      <div style={{ margin: 10, flexDirection: "row" }}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ margin: 10, flexDirection: "row" }}>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ margin: 10, flexDirection: "row" }}>
          <button onClick={handleSignup} className="btn btn-outline-primary">
            Sign Up
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
          {error && <p style={{ margin: 10, color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Signup;
