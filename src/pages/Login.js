import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("success");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendLoginRequest = async (e) => {
    const reqBody = {
      email: userName,
      password: password,
    };

    let result = await axios.post(
      "http://18.117.158.204:8081/user/login",
      reqBody
    );
    if (result.data === "Failure") {
      setError("Incorrect username or password");
    } else {
      setError("success");
      dispatch({ type: "userId", userId: result.data });
      navigate("/Home", { state: { data: result.data } });
    }
  };
  return (
    // TODO add background image and pass the inputs to backend
    // TODO add field validations
    // TODO provide a way to reset password
    // TODO improve styles

    <>
      <div className="rowInput">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>
      <div className="rowInput">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="rowInput">
        <button
          className="btn btn-primary mx-2"
          id="submit"
          type="button"
          onClick={() => sendLoginRequest()}
        >
          Login
        </button>
        <Link className="btn btn-primary mx-2" to={`/Signup`}>
          Signup
        </Link>
        {error !== "success" && (
          <p style={{ margin: 20, color: "red" }}>{error}</p>
        )}
      </div>
    </>
  );
}
