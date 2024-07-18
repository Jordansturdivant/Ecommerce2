import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  return (
    <div>
      {/* Home */}
      <section className="home" id="home">
        <div className="home-data container">
          {/* Home Text */}
          <div className="home-text">
            <h3>We can help you to</h3>
            <h2>
              Feel at <br />
              Peace in <br />
              Any Environment
            </h2>
            <div className="home-btns">
              <a href="shop.html" className="explore-btn btn">Explore</a>
            </div>
          </div>
          {/* Home Image */}
          <div className="home-img">
            <img src="./photos/spagirl.jpg" alt="spa girl" />
          </div>
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-box">
              <i className="bx bxs-map"></i>
              <span>Charlotte, North Carolina</span>
            </div>
          </div>
        </div>
        {/* 2nd Home Image For Mobile Responsiveness */}
        <div className="home-bg">
          <img src="./photos/spagirl.jpg" alt="spa girl" />
        </div>
      </section>

      {/* About */}
      <section className="about container" id="about">
        {/* About Text */}
        <div className="about-text">
          {/* Heading */}
          <h2 className="heading">About Us</h2>
          <h1>Your Peace Is Our Priority</h1>
          <p>
            We provide the best spa experience/products that guarantee to make you
            healthier and make you look more beautiful
          </p>
        </div>
        {/* About Data - Carousel */}
        <div className="about-data">
          <Carousel responsive={responsive}>
            <div className="about-box">
              <img src="/photos/about-1.jpg" alt="About 1" />
            </div>
            <div className="about-box">
              <img src="photos/about-2.jpg" alt="About 2" />
            </div>
            <div className="about-box">
              <img src="photos/about-3.jpg" alt="About 3" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

// import React, { useState } from "react";
// import Slider from "react-slick";

// function Resizable() {
//   const [display, setDisplay] = useState(true);
//   const [width, setWidth] = useState(600);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="slider-container">
//       <h2> Resizable Collapsible </h2>
//       <button className="button" onClick={() => setWidth(width + 100)}>
//         {" "}
//         increase{" "}
//       </button>
//       <button className="button" onClick={() => setWidth(width - 100)}>
//         {" "}
//         decrease{" "}
//       </button>
//       <button className="button" onClick={() => setDisplay(!display)}>
//         {" "}
//         toggle{" "}
//       </button>
//       <div
//         style={{
//           width: width + "px",
//           display: display ? "block" : "none"
//         }}
//       >
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Resizable;



// import React, { useEffect, useRef } from 'react';
// // import Glider from 'glider-js';
// import GliderComponent from 'react-glider-carousel';
// import 'glider-js/glider.min.css';
// import './Carousel.css'; 
// import 
// const GliderComponent = () => {
//   const gliderRef = useRef(null);

//   useEffect(() => {
//     new Glider(gliderRef.current, {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: '#dots',
//       arrows: {
//         prev: '#glider-prev',
//         next: '#glider-next'
//       },
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3
//           }
//         }
//       ]
//     });
//   }, []);

//   return (
//     <div className="glider-container">
//       <button id="glider-prev">«</button>
//       <div className="glider" ref={gliderRef}>
//         <div><img src="photos/about-1.jpg" alt="Description 1" /></div>
//         <div><img src="photos/about-2.jpg" alt="Description 2" /></div>
//         <div><img src="photos/about-3.jpg" alt="Description 3" /></div>
//       </div>
//       <button id="glider-next">»</button>
//       <div id="dots"></div>
//     </div>
//   );
// };

// export default Carousel;
