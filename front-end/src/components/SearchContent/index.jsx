import "./style.css";
import SearchBar from "../SearchBar";
import { useEffect, useState } from "react";
import Trending from "../Trending";
import { useNavigate } from "react-router-dom";

const SearchContent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const MovieName = (name) => {
    setData(name);
  };

  const ContentOne = () => {
    if (data.length === 0) {
      return (
        <div>
          <div className="sh-bar-2">
            <p>Horror</p>
            <p>Action</p>
            <p>Romance</p>
            <p>Thriller</p>
            <p>Drama</p>
            <p>Fantasy</p>
          </div>
          <Trending></Trending>
          <Trending></Trending>
          <Trending></Trending>
          <Trending></Trending>
        </div>
      );
    } else if (data.length != 0) {
      return (
        <div className="sh-image-1">
          {data.map((i, index) => {
            return (
              <div className="sh-img-2" key={index}>
                <img
                  onClick={() => navigate(`/movie/${i.id}`)}
                  src={i.image}
                  alt=""
                />
                ;
              </div>
            );
          })}
          <Trending></Trending>
          <Trending></Trending>
          <Trending></Trending>
        </div>
      );
    }
  };

  useEffect(() => {}, [data]);

  return (
    <div className="sh-content">
      <SearchBar MovieName={MovieName}></SearchBar>
      {ContentOne()}
    </div>
  );
};

export default SearchContent;
