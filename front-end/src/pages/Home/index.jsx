import "./style.css";
// import Navbar from "../../components/Navbar";
import HomeContent from "../../components/HomeContent";
import Trending from "../../components/Trending";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <HomeContent></HomeContent>
      <Category></Category>
      <Trending></Trending>
      <Trending></Trending>
      <Trending></Trending>
      <Footer home="red"></Footer>
      {/* <Navbar></Navbar> */}
    </div>
  );
};

export default Home;
