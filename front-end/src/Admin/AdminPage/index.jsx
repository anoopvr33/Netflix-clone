import "./style.css";
import AdminContent from "../../components/AdminContent";
import AdminNavbar from "../../components/AdminNavbar";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <AdminContent></AdminContent>
      <AdminNavbar></AdminNavbar>
    </div>
  );
};

export default AdminPage;
