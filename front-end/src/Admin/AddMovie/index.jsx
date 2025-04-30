import { useRef, useState } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios.js";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [imagess, setImage] = useState({});
  const [data, setData] = useState({
    name: "",
    cast: "",
    duration: "",
    year: "",
    image: "",
  });
  const fileref = useRef();

  const FileInput = () => {
    fileref.current.click();
  };

  const EnterData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const SelectedFile = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const response = await axios.post("/upload/image", formData);
    setData({ ...data, image: response.data.url });
    setImage({ ...imagess, img: response.data.url });
  };

  const OnAddMovie = async () => {
    const response = await axios.post("/movie/postmovie", data);
    console.log("successfully added", response);
    toast.success("succesfully Added");
  };

  const RemoveImg = async () => {
    setImage({});
    const imgData = "";
    const response = await axios.post("/upload/image", imgData);
    // console.log("dfdfdddd", response.data.url);
    setData({ ...data, image: response.data.url });
  };

  // console.log("jka", imagess);

  return (
    <div className="add-movie">
      <div className="add-movie-nav">
        <i onClick={() => navigate(-1)} className="fa-solid fa-arrow-left"></i>
        <h3>Add Movie</h3>
      </div>
      {Object.keys(imagess) == 0 ? (
        <div className="add-movie-1">
          <i className="fa-solid fa-image"></i>

          <input
            style={{ display: "none" }}
            type="file"
            onChange={SelectedFile}
            ref={fileref}
          />

          <h2 onClick={FileInput}>Add Poster</h2>
        </div>
      ) : (
        <div className="poster-added">
          <img src={imagess.img} alt="Poster" />
          <i onClick={RemoveImg} className="fa-solid fa-xmark"></i>
        </div>
      )}

      <div className="add-movie-2">
        <input
          onChange={EnterData}
          type="text"
          placeholder="Movie Name"
          name="name"
          id=""
        />
        <input
          onChange={EnterData}
          type="text"
          name="year"
          placeholder="Year"
          id=""
        />
        <input
          onChange={EnterData}
          type="text"
          name="duration"
          placeholder="Duration"
          id=""
        />
        <input
          onChange={EnterData}
          type="text"
          name="cast"
          placeholder="Cast"
          id=""
        />
        <button onClick={OnAddMovie}> Add movie </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default AddMovie;
