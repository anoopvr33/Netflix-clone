import { useEffect, useState } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const AdminContent = () => {
  const navigate = useNavigate();
  const [popup, setpopup] = useState({});
  const [movie, setMovie] = useState([]);
  const [message, setMsg] = useState("");

  const GetMovie = async () => {
    const response = await axios.get("/movie/getmovie");
    console.log(response.data);
    const movieData = response.data.map((item) => {
      return {
        _id: item._id,
        image: item.image,
        name: item.name,
        year: item.year,
        duration: item.duration,
      };
    });
    if (response.data.message) {
      setMsg("not Authorized");
    }
    setMovie(movieData);
  };

  const DeleteMovie = (id) => {
    console.log("hasi", id);
    axios.delete(`/movie/delete/${id}`);
    // if (response) {
    //   toast.success("deletd successfulyy");
    // }
    alert("deleted pls refresh , real time connection not developed");
  };

  const SetPop = (i) => {
    setpopup(i);
  };

  useEffect(() => {
    GetMovie();
  }, []);
  return (
    <div className="admin-content">
      <div className="admin-content-1">
        {message == "" ? "" : message}
        {movie.map((i, index) => {
          return (
            <div key={index} className="admin-content-img-card">
              <img src={i.image} />
              <div className="admin-popup">
                {popup == index ? (
                  <i
                    onClick={() => {
                      SetPop(null);
                    }}
                    className="fa-solid fa-xmark"
                  ></i>
                ) : (
                  <i
                    onClick={() => {
                      SetPop(index);
                    }}
                    className="fa-solid fa-ellipsis-vertical"
                  ></i>
                )}

                <div
                  className={`${
                    popup == index ? "admin-pop-manage" : "pop-manage-none"
                  }`}
                >
                  <h3 onClick={() => navigate(`editmovie/${i._id}`)}>Edit</h3>
                  <h3 onClick={() => DeleteMovie(i._id)}>Delete</h3>
                  <ToastContainer></ToastContainer>
                </div>
              </div>
              <div className="admin-content-details">
                <h3>{i.name}</h3>
                <p>
                  ({i.year}) {i.duration}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminContent;
