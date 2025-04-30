import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./Admin/AdminPage";
import UserLogin from "./Authentication/UserLogin";
import UserSignUp from "./Authentication/UserSign";
import Home from "./pages/Home";
import AddMovie from "./Admin/AddMovie/index.jsx";
import EditMovie from "./components/AdminMovieEdit/index.jsx";
import AdminLogin from "./Authentication/AdminLogin/index.jsx";
import AdminSignUp from "./Authentication/AdminSign/index.jsx";
import SearchArea from "./pages/SearchArea/index.jsx";
import Movie from "./pages/Movie/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";
import Profile from "./pages/Profile/index.jsx";
import Welcome from "./pages/WelcomePage/index.jsx";

// Filter only works on search input  due to time //
//
// --------------------  / for user home -----------
// ----------------------/usersignup -------------
// ----------------------/userlogin -------------
// ----------------------/admin/signup -------------
// ----------------------/admin/login -------------
// ----------------------/admin for admin home -------------
// ----------------------/addmovie -------------
// ----------------------/admin/editmovie/:id -------------

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<ProtectedRoute roles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminPage />}></Route>{" "}
          <Route path="/addmovie" element={<AddMovie />}></Route>
          <Route path="/admin/editmovie/:id" element={<EditMovie />}></Route>
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/signup" element={<AdminSignUp />}></Route>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/search" element={<SearchArea />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
};

export default App;
