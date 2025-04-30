import { useNavigate } from "react-router-dom";
import "./style.css";

const Footer = ({ home, search, profile }) => {
  const navigate = useNavigate();

  console.log("color", search);

  return (
    <div className="footer">
      <i
        style={{ color: ` ${home}` }}
        onClick={() => navigate("/home")}
        className="fa-solid fa-house-user"
      ></i>
      <i
        style={{ color: `${search}` }}
        onClick={() => navigate("/search")}
        className="fa-solid fa-magnifying-glass"
      ></i>
      <i
        onClick={() => navigate("/profile")}
        style={{ color: `${profile}` }}
        className="fa-solid fa-user"
      ></i>
    </div>
  );
};

export default Footer;
