import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import customAxios from "../../utils/axios";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const GetMovie = async () => {
    const response = await customAxios.get(`/movie/getmovie/${id}`);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    GetMovie();
  }, []);

  return (
    <div className="sh-image">
      <div className="sh-img-2">
        <i onClick={() => navigate(-1)} className="fa-solid fa-angle-left"></i>
        <img src={data.image} alt="" />;
        <div className="sh-image-btn">
          <button style={{ color: "white", backgroundColor: "red" }}>
            <i className="fa-solid fa-play"></i> <span> </span>
            Play Now
          </button>
          <button>
            <i className="fa-solid fa-plus"></i> <span> </span>Add List
          </button>
        </div>
        <h2>
          {data.name}({data.year})
        </h2>
        <p>Fantasy, Action, </p>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          soluta eum! Dolores incidunt tenetur atque eligendi quibusdam iste ue
          ea hic aperiam praesentium.
        </p>
        <h3>Cast</h3>
        <div className="cast-img">
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Movie;
