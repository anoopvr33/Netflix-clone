import { useState } from "react";
import axios from "../../utils/axios.js";
import "./style.css";

import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const EnterData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const OnLogin = async () => {
    const response = await axios.post("/admin/login", data);

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/admin");
    } else {
      return alert("Invalid Credentials");
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login-1">
        <h1>Sign In</h1>
        <input
          onChange={EnterData}
          type="text"
          placeholder="Email or Username"
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
          Dont have an account?{" "}
          <span onClick={() => navigate("/admin/signup")}>SignUp</span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
