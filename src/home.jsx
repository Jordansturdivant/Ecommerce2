import React from 'react';
import './App.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

const slides = [
  { image: '/photos/about-1.jpg', title: 'About 1', price: '0.00' },
  { image: '/photos/about-2.jpg', title: 'About 2', price: '0.00' },
  { image: '/photos/about-3.jpg', title: 'About 3', price: '0.00' }
];

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

      {/* About and Mission */}
      <section className="about-mission container" id="about">
        {/* About Us */}
        <div className="about-text">
          <h2 className="heading">About Us</h2>
          <h1>Your Peace Is Our Priority</h1>
          <p>
          {/* We provide the best spa experience/products that guarantee to make you healthier and make you look more beautiful. */}
          Our expertly curated range of skincare and body products is designed to enhance your well-being, promote a healthier lifestyle, and bring out your natural beauty. We pride ourselves on using premium ingredients that are both effective and nurturing, ensuring that each product provides a luxurious and transformative experience
          </p>
        </div>

        {/* Our Mission */}
        <div className="mission-text">
          <h2 className="heading">Our Mission</h2>
          <p>
          At Serenity Springs Spa, our mission is to offer exceptional skincare and body products that transform your everyday routine into a luxurious spa experience. We are dedicated to using the finest ingredients to create an oasis of calm and relaxation, helping you achieve a sense of serenity even when you can't visit a spa in person.Our products are designed to elevate your self-care routine, providing a tranquil escape from the stresses of daily life. With a commitment to holistic wellness and sustainable practices, Serenity Springs Spa aims to foster a peaceful environment where you can truly rejuvenate and find inner peac
          </p>
        </div>
      </section>

      {/* About Data - Carousel */}
      <section className="about-data">
        <Swiper slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination>
          {slides.map((slide, index) => (
            <SwiperSlide className='swiper-slide' key={index}>
              <img className="profile" src={slide.image} alt={slide.title} />
              {/* <h2>{slide.title}</h2>
              <p>${slide.price}</p> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

// import React from 'react';
// // import Swiper from 'swiper';
// import './App.css';
// import { SwiperSlide, Swiper } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './slider.css'


// const slides = [
//   { image: '/photos/about-1.jpg', title: 'About 1', price: '0.00' },
//   { image: '/photos/about-2.jpg', title: 'About 2', price: '0.00' },
//   { image: '/photos/about-3.jpg', title: 'About 3', price: '0.00' }
// ];

// export default function Home() {
//   return (
//     <div>
//       {/* Home */}
//       <section className="home" id="home">
//         <div className="home-data container">
//           {/* Home Text */}
//           <div className="home-text">
//             <h3>We can help you to</h3>
//             <h2>
//               Feel at <br />
//               Peace in <br />
//               Any Environment
//             </h2>
//             <div className="home-btns">
//               <a href="shop.html" className="explore-btn btn">Explore</a>
//             </div>
//           </div>
//           {/* Home Image */}
//           <div className="home-img">
//             <img src="./photos/spagirl.jpg" alt="spa girl" />
//           </div>
//           {/* Contact Info */}
//           <div className="contact-info">
//             <div className="contact-info-box">
//               <i className="bx bxs-map"></i>
//               <span>Charlotte, North Carolina</span>
//             </div>
//           </div>
//         </div>
//         {/* 2nd Home Image For Mobile Responsiveness */}
//         <div className="home-bg">
//           <img src="./photos/spagirl.jpg" alt="spa girl" />
//         </div>
//       </section>

//       {/* About */}
//       <section className="about container" id="about">
//         {/* About Text */}
//         <div className="about-text">
//           {/* Heading */}
//           <h2 className="heading">About Us</h2>
//           <h1>Your Peace Is Our Priority</h1>
//           <p>
//             We provide the best spa experience/products that guarantee to make you
//             healthier and make you look more beautiful
//           </p>
//         </div>
//         {/* About Data - Carousel */}
//         <div className="about-data">
//           <Swiper slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination > {slides.map((slide, index) => (
//           <SwiperSlide className= 'swiper-slide' key={index}>
//             <img className="profile" src={slide.image} alt={slide.title} />
//             {/* <h2>{slide.title}</h2>
//             <p>${slide.price}</p> */}
//           </SwiperSlide>
//         ))}</Swiper>
//         </div>
//       </section>
//     </div>
//   );
// }
// import React from 'react'
// import Resizable from './carousel';
// import { Link } from 'react-router-dom';

// export default function Home () {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//     return (
//         <div>
          
    
//           {/* Home */}
//           <section className="home" id="home">
//             <div className="home-data container">
//               {/* Home Text */}
//               <div className="home-text">
//                 <h3>We can help you to</h3>
//                 <h2>
//                   Feel at <br />
//                   Peace in <br />
//                   Any Environment
//                 </h2>
//                 <div className="home-btns">
//                   {/* <a href="shop" className="explore-btn btn">Explore</a> */}
//                   <Link to ="/shop" className="explore-btn btn">Explore</Link>
//                 </div>
//               </div>
//               {/* Home Image */}
//               <div className="home-img">
//                 <img src="./photos/spagirl.jpg" alt="spa girl" />
//               </div>
//               {/* Contact Info */}
//               <div className="contact-info">
//                 <div className="contact-info-box">
//                   <i className="bx bxs-map"></i>
//                   <span>Charlotte, North Carolina</span>
//                 </div>
//               </div>
//             </div>
//             {/* 2nd Home Image For Mobile Responsiveness */}
//             <div className="home-bg">
//               <img src="./photos/spagirl.jpg" alt="" />
//             </div>
//           </section>
    
//           {/* About */}
//           <section className="about container" id="about">
//             {/* About Text */}
//             <div className="about-text">
//               {/* Heading */}
//               <h2 className="heading">About Us</h2>
//               <h1>Your Peace Is Our Priority</h1>
//               <p>
//                 We provide the best spa experience/products that guarantee to make you
//                 healthier and make you look more beautiful
//               </p>
//             </div>
//             {/* About Data */}
//             <div className="about-data">
//               {/* Box 1 */}
//               <div className="about-box">
//                 <img src="/photos/about-1.jpg" alt="" />
//               </div>
//               {/* Box 2 */}
//               <div className="about-box">
//                 <img src="img/about-2.jpg" alt="" />
//               </div>
//               {/* Box 3 */}
//               <div className="about-box">
//                 <img src="img/about-3.jpg" alt="" />
//               </div>
//             </div>
//           </section>
        
// </div>
          
//       );
//     }
// import React from 'react'
// import Resizable from './carousel';
// import { Link } from 'react-router-dom';

// export default function Home () {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//     return (
//         <div>
          
    
//           {/* Home */}
//           <section className="home" id="home">
//             <div className="home-data container">
//               {/* Home Text */}
//               <div className="home-text">
//                 <h3>We can help you to</h3>
//                 <h2>
//                   Feel at <br />
//                   Peace in <br />
//                   Any Environment
//                 </h2>
//                 <div className="home-btns">
//                   {/* <a href="shop" className="explore-btn btn">Explore</a> */}
//                   <Link to ="/shop" className="explore-btn btn">Explore</Link>
//                 </div>
//               </div>
//               {/* Home Image */}
//               <div className="home-img">
//                 <img src="./photos/spagirl.jpg" alt="spa girl" />
//               </div>
//               {/* Contact Info */}
//               <div className="contact-info">
//                 <div className="contact-info-box">
//                   <i className="bx bxs-map"></i>
//                   <span>Charlotte, North Carolina</span>
//                 </div>
//               </div>
//             </div>
//             {/* 2nd Home Image For Mobile Responsiveness */}
//             <div className="home-bg">
//               <img src="./photos/spagirl.jpg" alt="" />
//             </div>
//           </section>
    
//           {/* About */}
//           <section className="about container" id="about">
//             {/* About Text */}
//             <div className="about-text">
//               {/* Heading */}
//               <h2 className="heading">About Us</h2>
//               <h1>Your Peace Is Our Priority</h1>
//               <p>
//                 We provide the best spa experience/products that guarantee to make you
//                 healthier and make you look more beautiful
//               </p>
//             </div>
//             {/* About Data */}
//             <div className="about-data">
//               {/* Box 1 */}
//               <div className="about-box">
//                 <img src="/photos/about-1.jpg" alt="" />
//               </div>
//               {/* Box 2 */}
//               <div className="about-box">
//                 <img src="img/about-2.jpg" alt="" />
//               </div>
//               {/* Box 3 */}
//               <div className="about-box">
//                 <img src="img/about-3.jpg" alt="" />
//               </div>
//             </div>
//           </section>
        
// </div>
          
//       );
//     }

