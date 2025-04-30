import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <p>Series</p>
      <p>Movies</p>
      <p onClick={() => navigate("/search")}>
        Search <i className="fa fa-search" aria-hidden="true"></i>
      </p>
      <p onClick={() => navigate("/profile")}>Profile</p>
    </div>
  );
};

export default Header;
