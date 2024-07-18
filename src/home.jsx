import React from 'react'
import Resizable from './carousel';
import { Link } from 'react-router-dom';

export default function Home () {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
                  {/* <a href="shop" className="explore-btn btn">Explore</a> */}
                  <Link to ="/shop" className="explore-btn btn">Explore</Link>
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
              <img src="./photos/spagirl.jpg" alt="" />
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
            {/* About Data */}
            <div className="about-data">
              {/* Box 1 */}
              <div className="about-box">
                <img src="/photos/about-1.jpg" alt="" />
              </div>
              {/* Box 2 */}
              <div className="about-box">
                <img src="img/about-2.jpg" alt="" />
              </div>
              {/* Box 3 */}
              <div className="about-box">
                <img src="img/about-3.jpg" alt="" />
              </div>
            </div>
          </section>
        
</div>
          
      );
    }
    
