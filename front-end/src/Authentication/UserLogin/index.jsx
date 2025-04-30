import { useState } from "react";
import axios from "../../utils/axios.js";
import "./style.css";

import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const EnterData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const OnLogin = async () => {
    const response = await axios.post("/user/login", data);

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } else {
      return alert("Invalid Credentials");
    }
  };

  return (
    <div className="user-login">
      <div className="user-login-1">
        <h1>Sign In</h1>
        <input
          onChange={EnterData}
          type="text"
          placeholder="Enter your email"
          name="email"
          id="1"
        />
        <input
          onChange={EnterData}
          type="password"
          placeholder="Password"
          name="password"
          id="2"
        />
        <button onClick={OnLogin}>Sign In</button>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/user-signup")}>SignUp</span>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
