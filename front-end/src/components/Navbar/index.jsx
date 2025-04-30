// import { useState } from "react";
// import "./style.css";
// import { io } from "socket.io-client";

// const Navbar = () => {
//   const [filter, setFilter] = useState(false);
//   const [item, setItem] = useState({});
//   const socket = io.connect("http://localhost:3005");

//   const InputData = async (e) => {
//     const data = e.target.value;
//     console.log(data);
//     setItem(data);
//   };

//   const OnAdd = async () => {
//     await socket.emit("send_message", item);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-1">
//         <input onChange={InputData} type="text" placeholder=" Search movies " />
//         <i onClick={OnAdd} className="fa-solid fa-magnifying-glass"></i>
//         <i onClick={() => setFilter(!filter)} className="fa-solid fa-bars"></i>
//       </div>
//       <div className={`${filter ? "nav-extend" : "nav-less"}`}>
//         <select name="" id="">
//           <option value="">year</option>
//           <option value="">2024</option>
//           <option value="">2023</option>
//           <option value="">2022</option>
//           <option value="">2021</option>
//         </select>
//         <select name="" id="">
//           <option value=""> Hour </option>
//           <option value="">1hr</option>
//           <option value="">2hr</option>
//           <option value="">3hr</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
