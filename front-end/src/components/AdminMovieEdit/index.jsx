import { useEffect, useRef, useState } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios.js";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagess, setImage] = useState({});
  const [onedata, setOnedata] = useState({});
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

  const GetMovie = async () => {
    const response = await axios.get(`/movie/getmovie/${id}`);
    setOnedata(response.data);
    setData({
      ...data,
      image: response.data.image,
      name: response.data.name,
      year: response.data.year,
      duration: response.data.duration,
      cast: response.data.cast,
    });
    setImage({ ...imagess, img: response.data.image });
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

  const UpdateMovie = async () => {
    axios.patch(`/movie/update/${id}`, data);
    toast.success("succesfully updated");
  };

  const RemoveImg = async () => {
    setImage({});
    const imgData = "";
    const response = await axios.post("/upload/image", imgData);

    setData({ ...data, image: response.data.url });
  };

  console.log("jka", imagess);
  useEffect(() => {
    GetMovie();
  }, []);

  return (
    <div className="edit-movie">
      <div className="edit-movie-nav">
        <i onClick={() => navigate(-1)} className="fa-solid fa-arrow-left"></i>
        <h3>Update Movie</h3>
      </div>
      {Object.keys(imagess) == 0 ? (
        <div className="edit-movie-1">
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
        <div className="edit-poster-added">
          <img src={imagess.img} alt="Poster" />
          <i onClick={RemoveImg} className="fa-solid fa-xmark"></i>
        </div>
      )}

      <div className="edit-movie-2">
        <input
          onChange={EnterData}
          type="text"
          placeholder={onedata.name}
          name="name"
          id=""
        />
        <input
          onChange={EnterData}
          type="text"
          name="year"
          placeholder={onedata.year}
          id=""
        />
        <input
          onChange={EnterData}
          type="text"
          name="duration"
          placeholder={onedata.duration}
          id=""
        />
        <input
          onChange={EnterData}
          type="text"
          name="cast"
          placeholder={onedata.cast}
          id=""
        />
        <button onClick={UpdateMovie}> Update movie </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default EditMovie;
