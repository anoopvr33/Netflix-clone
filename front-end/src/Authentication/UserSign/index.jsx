import { useState } from "react";
import axios from "../../utils/axios.js";
import "./style.css";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", phone: "", password: "" });

  const EnterData = (e) => {
    const { name, value } = e.target;
    // setData((prevData) => ({ ...prevData, [name]: value }));
    setData({ ...data, [name]: value });
  };

  const OnSign = async () => {
    const response = await axios.post("/user/signup", data);
    console.log(response);
    if (response.data.message) {
      navigate("/user-login");
    } else {
      alert("error occured");
    }
  };
  return (
    <div className="user-sign">
      <div className="user-sign">
        <div className="user-sign-1">
          <h1>Signup</h1>
          <input
            onChange={EnterData}
            type="text"
            name="email"
            placeholder="Enter your email"
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
          <p>
            Already have an account? <span>SignIn</span>
          </p>

          <button>Sign Up with Google</button>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
