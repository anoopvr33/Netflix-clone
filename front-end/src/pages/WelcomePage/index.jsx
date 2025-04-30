import { useNavigate } from "react-router-dom";
import "./style.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <button
        onClick={() => navigate("/user-login")}
        style={{ backgroundColor: "red" }}
      >
        Sign In
      </button>
      <button
        onClick={() => navigate("/user-signup")}
        style={{ color: "white" }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Welcome;
