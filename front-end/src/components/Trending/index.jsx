//   const trending = [
//     {
//       image: "/public/movie001.jpg",
//       name: "T-shirt",
//       price: "300",
//       brand: "Oxford",
//     },
//     {
//       image: "/public/movie002.jpg",
//       name: "T-shirt",
//       price: "300",
//       brand: "Holister",
//     },
//     {
//       image: "/public/movie003.jpg",
//       name: "T-shirt",
//       price: "300",
//       brand: "Republic",
//     },
//     {
//       image: "/public/movie004.jpg",
//       name: "T-shirt",
//       price: "300",
//       brand: "Oxford",
//     },
//     {
//       image: "/public/movie005.jpg",
//       name: "T-shirt",
//       price: "300",
//       brand: "Holister",
//     },
//     {
//       image: "/public/movie006.jpg",
//       name: "T-shirt",
//       price: "300",
//       brand: "Republic",
//     },
//   ];

import { useEffect } from "react";
import "./style.css";
// import "react-slideshow-image/dist/styles.css";
// import Button from "../Button/index.jsx";
// import { Slide } from "react-slideshow-image";

const Trending = () => {
  const trending = [
    {
      image: "/public/movie001.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Oxford",
    },
    {
      image: "/public/movie002.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Holister",
    },
    {
      image: "/public/movie003.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Republic",
    },
    {
      image: "/public/movie004.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Oxford",
    },
    {
      image: "/public/movie005.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Holister",
    },
    {
      image: "/public/movie006.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Republic",
    },
    {
      image: "/public/movie003.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Republic",
    },
    {
      image: "/public/movie004.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Oxford",
    },
    {
      image: "/public/movie005.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Holister",
    },
    {
      image: "/public/movie006.jpg",
      name: "T-shirt",
      price: "300",
      brand: "Republic",
    },
  ];

  const Slide = () => {
    const productContainers = [
      ...document.querySelectorAll(".product-container"),
    ];
    const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
    const preBtn = [...document.querySelectorAll(".pre-btn")];

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
      });

      preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
      });
    });
  };

  useEffect(() => {
    Slide();
  }, []);
  return (
    <div className="suggest">
      <section className="product">
        {/* <h1>
          Find Your <span>Trend</span>
        </h1> */}
        <h2>Popular Movies</h2>
        <div className="product-container">
          {trending.map((i, index) => {
            return (
              <div key={index} className="product-card">
                <div className="product-image">
                  {/* <p>${i.price}</p> */}

                  <img src={i.image} className="product-thumb" alt="" />
                  {/* <p>{i.brand}</p> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="btnn">
          <button className="pre-btn">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="nxt-btn">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* <button>hhhh</button> */}
      </section>
    </div>
  );
};

export default Trending;
