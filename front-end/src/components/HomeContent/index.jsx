import { useEffect, useState } from "react";
import axios from "../../utils/axios.js";
// import { io } from "socket.io-client";
// import Trending from "../Trending/index.jsx";
// import Button from "../Buttons/index.jsx";
// import Header from "../Header/index.jsx";
import "./style.css";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  // const socket = io.connect("http://localhost:3005");
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  const GetMovie = async () => {
    const response = await axios.get("/movie/getmovie");
    console.log(response.data);
    const movieData = response.data
      .map((item) => {
        return {
          _id: item._id,
          image: item.image,
          name: item.name,
          year: item.year,
        };
      })
      .reverse();
    setMovie(movieData);
    console.log(response.data);
  };

  useEffect(() => {
    GetMovie();
  }, []);

  return (
    <div className="home-content">
      <div className="home-content-1">
        {movie.slice(0, 5).map((i, index) => {
          return (
            <div key={index} className="home-content-img-card">
              <div className="home-content-details">
                <h1 style={{ color: "white" }}>{i.name}</h1>
                <div className="home-btn-2">
                  <button
                    onClick={() => navigate(`/movie/${i._id}`)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    <i className="fa-solid fa-play"></i> <span> </span>
                    Play Now
                  </button>
                  {/* <Button classname="btn2" child="Play Now"></Button> */}
                  <button>
                    <i className="fa-solid fa-plus"></i> My List
                  </button>
                </div>
                <p>Action, Fantasy Drama 2024 </p>
              </div>
              <img src={i.image} />
            </div>
          );
        })}
        {movie.slice(0, 4).map((i, index) => {
          return (
            <div key={index} className="home-content-img-card">
              <div className="home-content-details">
                <h1 style={{ color: "white" }}>{i.name}</h1>
                <div className="home-btn-2">
                  <button
                    onClick={() => navigate(`/movie/${i._id}`)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    <i className="fa-solid fa-play"></i> <span> </span>
                    Play Now
                  </button>
                  {/* <Button classname="btn2" child="Play Now"></Button> */}
                  <button>
                    <i className="fa-solid fa-plus"></i> My List
                  </button>
                </div>
                <p>Action, Fanstasy 2024 </p>
              </div>
              <img src={i.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeContent;
