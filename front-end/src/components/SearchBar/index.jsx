import { useEffect, useState } from "react";
import customAxios from "../../utils/axios";
import "./style.css";

const SearchBar = ({ MovieName }) => {
  const [data, setData] = useState("");

  const EnterData = (e) => {
    setData(e.target.value);
  };

  const OnButton = async () => {
    console.log("jjjoo", data);
    const response = await customAxios.post("/movie/filter/name", {
      name: data,
    });
    console.log("lalal", response);
    const movieData = response.data.map((item) => {
      return {
        id: item._id,
        image: item.image,
        name: item.name,
        year: item.year,
        duration: item.duration,
      };
    });
    MovieName(movieData);
  };

  useEffect(() => {}, [data]);
  return (
    <div className="sh-bar">
      <div className="sh-bar-1">
        <input
          onChange={EnterData}
          type="text"
          placeholder="search movies 'Dune'"
        />
        <i onClick={OnButton} className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default SearchBar;
