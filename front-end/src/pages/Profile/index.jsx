import "./style.css";
import { getId } from "../../utils/index.js";
import Footer from "../../components/Footer/index.jsx";
import customAxios from "../../utils/axios.js";
import { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState({});

  const GetUser = async () => {
    const response = await customAxios.get(`/user/getuser/${getId()}`);
    console.log("looop", response.data);
    setData(response.data);
  };

  const MyList = [
    {
      image: "/public/movie2.jpeg",
    },
    {
      image: "/public/movie003.jpg",
    },
    {
      image: "/public/movie002.jpg",
    },
    {
      image: "/public/movie007.jpg",
    },
    {
      image: "/public/movie001.jpg",
    },
    {
      image: "/public/movie003.jpg",
    },
    {
      image: "/public/movie004.jpg",
    },
  ];
  useEffect(() => {
    GetUser();
  }, []);
  return (
    <div className="profile">
      <i className="fa fa-angle-left" aria-hidden="true"></i>
      <div className="profile-1">
        <div className="pro-dp">
          <h1>A</h1>
          <p>{data.email}</p>
        </div>

        <h3>My List</h3>
        <div className="pro-list">
          {MyList.map((i) => {
            return <img src={i.image} alt="" />;
          })}
        </div>

        <div className="pro-button">
          <p>
            Manage Profile <i className="fa-solid fa-angle-right"></i>
          </p>
          <p>
            App Setting <i className="fa-solid fa-angle-right"></i>
          </p>
          <p>
            Accout <i className="fa-solid fa-angle-right"></i>
          </p>
          <p>
            Help <i className="fa-solid fa-angle-right"></i>
          </p>
          <p>
            Sign Out <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
      </div>
      <Footer profile="red"></Footer>
    </div>
  );
};

export default Profile;
