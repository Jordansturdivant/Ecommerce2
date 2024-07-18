import React from 'react';
import Home from './home';
import ContactUs from './contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';



function App() {
  return (
<>
<Router>

          {/* Header */}
          <header>
            {/* Nav */}
            <div className="nav container">
              {/* Logo */}
              <a href="index.html" className="logo">Serenity Springs Spa</a>
              {/* Navbar */}
              <div className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to ="/shop">Shop</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
          
              </div>
              {/* Menu Icon */}
              <div className="menu-icon">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
          
            </div>
          </header>

          
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<ContactUs />} />
  </Routes>
</Router>
 {/* Footer */}
 <section className="footer">
            <div className="footer-container container">
              <div className="footer-box">
                <a href="#" className="logo">Serenity</a>
                <div className="social">
                  <a href="https://www.facebook.com/YourFacebookPage"><i className="bx bxl-facebook"></i></a>
                  <a href="https://www.twitter.com/YourTwitterPage"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.instagram.com/YourInstagramPage"><i className="bx bxl-instagram"></i></a>
                  <a href="https://www.youtube.com/YourYouTubePage"><i className="bx bxl-youtube"></i></a>
                </div>
              </div>
              <div className="footer-box">
                <h3>Legal</h3>
                <a href="#">Privacy</a>
                <a href="#">Refund Policy</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </section>
          <div className="copyright">
            <p>&#169; Serenity</p>
          </div>
          {/* Swiper JS */}
          <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
          {/* Link To Js */}
          <script src="js/main.js"></script>
        

</>
  );
}



export default App;
