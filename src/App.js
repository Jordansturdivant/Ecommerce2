import React from 'react';
import Home from './home';
import ContactUs from './contact';
import Shop from './shop';
import SlidingTextBar from './SlidingTextBar'; // Import the SlidingTextBar component
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
            <a href="/" className="logo">Serenity Springs Spa</a>
            {/* Navbar */}
            <div className="navbar">
              <Link to="/" className="navbar-link" aria-label="Home">Home</Link>
              <Link to="/shop" className="navbar-link" aria-label="Shop">Shop</Link>
              <Link to="/contact" className="navbar-link" aria-label="Contact">Contact</Link>
            </div>
            {/* Menu Icon */}
            <div className="menu-icon">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </header>

        {/* Sliding Text Bar */}
        <SlidingTextBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>

      {/* Footer */}
      <section className="footer">
        <div className="footer-container container">
          <div className="footer-box">
            <h3>Never miss a step in your routine</h3>
            <form className="footer-form">
              <label htmlFor="email" className="footer-form-label">Email address</label>
              <input type="email" id="email" name="email" placeholder="EMAIL ADDRESS" className="footer-form-input" />
              <button type="submit" className="footer-form-button">Subscribe</button>
            </form>
            <p>&#169; 2024, Serenity. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <a href="/faqs" className="footer-link">FAQs</a>
              <a href="/returns" className="footer-link">Returns</a>
              <a href="/locator" className="footer-link">Locator</a>
            </div>
            <div className="footer-column">
              <a href="/contact" className="footer-link">Contact</a>
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
              <a href="/terms-of-service" className="footer-link">Terms of Service</a>
              <a href="/disclaimer" className="footer-link">Disclaimer</a>
            </div>
            <div className="footer-column">
              <a href="https://www.instagram.com/YourInstagramPage" className="footer-link">Instagram</a>
              <a href="https://www.facebook.com/YourFacebookPage" className="footer-link">Facebook</a>
              <a href="/blog" className="footer-link">Our Blog - Serenity Journal</a>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-copyright">
        <p>&#169; Serenity</p>
      </div>
    </>
  );
}

export default App;


// import React from 'react';
// import Home from './home';
// import ContactUs from './contact';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import Shop from './shop';



// function App() {
//   return (
// <>
// <Router>

//           {/* Header */}
//           <header>
//             {/* Nav */}
//             <div className="nav container">
//               {/* Logo */}
//               <a href="index.html" className="logo">Serenity Springs Spa</a>
//               {/* Navbar */}
//               <div className="navbar">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to ="/shop">Shop</Link></li>
//                 <li><Link to ="/contact">Contact</Link></li>
          
//               </div>
//               {/* Menu Icon */}
//               <div className="menu-icon">
//                 <div className="line1"></div>
//                 <div className="line2"></div>
//                 <div className="line3"></div>
//               </div>
          
//             </div>
//           </header>

          
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/contact" element={<ContactUs />} />
//     <Route path="/shop" element={<shop/>} />
//   </Routes>
// </Router>
//  {/* Footer */}
//  <section className="footer">
//             <div className="footer-container container">
//               <div className="footer-box">
//                 <a href="#" className="logo">Serenity</a>
//                 <div className="social">
                  // <a href="https://www.facebook.com/YourFacebookPage"><i className="bx bxl-facebook"></i></a>
                  // <a href="https://www.twitter.com/YourTwitterPage"><i className="bx bxl-twitter"></i></a>
                  // <a href="https://www.instagram.com/YourInstagramPage"><i className="bx bxl-instagram"></i></a>
                  // <a href="https://www.youtube.com/YourYouTubePage"><i className="bx bxl-youtube"></i></a>
//                 </div>
//               </div>
//               <div className="footer-box">
//                 <h3>Legal</h3>
//                 <a href="#">Privacy</a>
//                 <a href="#">Refund Policy</a>
//                 <a href="#">Cookie Policy</a>
//               </div>
//             </div>
//           </section>
//           <div className="copyright">
//             <p>&#169; Serenity</p>
//           </div>
//           {/* Swiper JS */}
//           <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
//           {/* Link To Js */}
//           <script src="js/main.js"></script>
        

// </>
//   );
// }



// export default App;
