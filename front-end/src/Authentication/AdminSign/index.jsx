import { useState } from "react";
import axios from "../../utils/axios.js";
import "./style.css";
import { useNavigate } from "react-router-dom";

const AdminSignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", phone: "", password: "" });

  const EnterData = (e) => {
    const { name, value } = e.target;
    // setData((prevData) => ({ ...prevData, [name]: value }));
    setData({ ...data, [name]: value });
  };

  const OnSign = async () => {
    console.log("gaa");
    const response = await axios.post("/admin/signup", data);
    console.log(response);
    if (response.data.message) {
      navigate("/admin/login");
    } else {
      alert("error occured");
    }
  };
  return (
    <div className="admin-sign">
      <div className="admin-sign">
        <div className="admin-sign-1">
          <h1>Signup</h1>
          <input
            onChange={EnterData}
            type="text"
            name="email"
            placeholder="Email or Username"
            id="1"
          />

          <input
            onChange={EnterData}
            name="password"
            type="password"
            placeholder="Password"
            id="3"
          />

          <button onClick={OnSign}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
