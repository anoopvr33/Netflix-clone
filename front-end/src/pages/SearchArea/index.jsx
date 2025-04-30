import "./style.css";
import SearchContent from "../../components/SearchContent";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const SearchArea = () => {
  const navigate = useNavigate();
  return (
    <div className="sa-area">
      <i
        onClick={() => navigate(-1)}
        className="fa fa-angle-left"
        aria-hidden="true"
      ></i>
      <SearchContent></SearchContent>
      <Footer search="red"></Footer>
    </div>
  );
};

export default SearchArea;
