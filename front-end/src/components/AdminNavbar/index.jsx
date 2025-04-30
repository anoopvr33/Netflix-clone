import { useNavigate } from "react-router-dom";
import "./style.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-navbar">
      <h2>Admin</h2>
      <div className="admin-navbar-1">
        <input type="text" placeholder=" Search movie " />
        <i className="fa-solid fa-magnifying-glass"></i>
        <i
          onClick={() => navigate("/addmovie")}
          className="fa-solid fa-plus"
        ></i>
      </div>
    </div>
  );
};

export default AdminNavbar;
