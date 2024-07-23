import React, { useState, useEffect } from 'react';
import './shop.css';

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/shop')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched products:', data); // Log the data
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = Array.isArray(products) ? products.filter(product => {
    return (
      (typeFilter === '' || product.Type === typeFilter) &&
      (priceFilter === '' || 
        (priceFilter === 'low' && product.Price < 30) ||
        (priceFilter === 'mid' && product.Price >= 30 && product.Price <= 50) ||
        (priceFilter === 'high' && product.Price > 50))
    );
  }) : [];

  return (
    <main className="shop-main">
      <div className="filters">
        <label>
          Filter by type:
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Skin">Skin</option>
            <option value="Face">Face</option>
          </select>
        </label>
        <label>
          Filter by price:
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="">All</option>
            <option value="low">Below $30</option>
            <option value="mid">$30 - $50</option>
            <option value="high">Above $50</option>
          </select>
        </label>
      </div>
      <div id="product-container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-details">
              <h2 className="product-name">{product.Name}</h2>
              <p className="product-description">{product.Description}</p>
              <p className="product-price">{`$${product.Price}`}</p>
              <img className="product-image" src={product.Image} alt={product.Name} />
            </div>
          </div>
        ))}
      </div>
      <section className="quiz-section">
        <div className="quiz-content">
          <h2>2 minutes to a new routine</h2>
          <p>Get a routine for exactly what your skin needs. Plus get a code for 10% off!</p>
          <a href="https://www.herocosmetics.us/pages/quiz" className="quiz-button">Take the Quiz</a>
          <img src="/public/skincare.jpg" alt="" className="quiz-image" />
        </div>
      </section>
    </main>
  );
};

export default Shop;














// import React, { useState } from 'react';
// import styles from './shop.css'; 


// export const Shop = () => {
//   const [typeFilter, setTypeFilter] = useState('');
//   const [priceFilter, setPriceFilter] = useState('');

//   const products = [
//     { name: 'Body Souffle', price: 45.99, description: 'Made from Wintergreen Leaves, White Willow Tree Bark, Phyto-Powered Complex with Shea Butter and Apricot Oil.', photo: 'img/body souffle.jpg', type: 'Skin' },
//     { name: 'Charcoal mask', price: 39.99, description: 'This vegan buttery-rich purifying charcoal & chia face mask clears the way for all skin types', photo: 'img/charcoal_mask.jpg', type: 'Face' },
//     { name: 'Ginger body cream', price: 35.99, description: 'A whipped body cream with our signature, spicy Ginger aroma.', photo: 'img/ginger body cream.jpg', type: 'Skin' },
//     { name: 'Ginger body scrub', price: 40.0, description: 'Skin-scouring Dead Sea Salts and warming Ginger Zest cushioned in Sweet Almond Oils removes all traces of roughness to buff every bit of you.', photo: 'img/ginger body scrub.jpg', type: 'Skin' },
//     { name: 'Hand and body lotion', price: 39.99, description: 'Our silky hand and body lotion with Hyaluronic Acid and Apricot Oil hydrates, improves barrier strength and imparts radiance—while it reveals softer, smoother skin over time', photo: 'img/hand and body lotion.jpg', type: 'Skin' },
//     { name: 'hand treatment', price: 25.99, description: 'Self-hydrating Rose of Jericho plus skin-reviving Trehalose and Sea Haricots work hand-in-hand to help skin recover from dramatic dehydration', photo: 'img/hand treatment.jpg', type: 'Skin' },
//     { name: 'lip butter', price: 16.5, description: 'lip balm—infused with 8 nourishing plant oils and butters—is a 2-in-1 treatment + overnight mask for soft, supple lips', photo: 'img/lip butter.jpg', type: 'Face' },
//     { name: 'Masking essentials', price: 39.99, description: '2-in-1 mask exfoliates dead surface cells and gently deep cleans, also helps restore the look of clarity', photo: 'img/masking essentials.jpg', type: 'Face' },
//     { name: 'On the spot', price: 39.99, description: 'A soul-soothing, sensory treatment that helps you find your inner peace, on-the-spot.', photo: 'img/on the spot.jpg', type: 'Face' },
//     { name: 'recovery for dry skin', price: 39.99, description: 'Skin-nourishing Shea and Cocoa Butters, help rapidly refresh, renew and replenish even the driest body skin.', photo: 'img/recovery for dry skin.jpg', type: 'Skin' },
//     { name: 'skin scent', price: 25.99, description: 'Ginger Essence is our signature ginger perfume and a fan-favorite since 2000.', photo: 'img/charcoal_mask.jpg', type: 'Face' },
//     { name: 'Smoothing ginger body scrub', price: 55.99, description: 'Smoothing Sugar gently buffs away dry skin and Leaves skin soft, refreshed, reinvigorated.', photo: 'img/smoothing ginger body scrub.jpg', type: 'Skin' },
//   ];

//   const filteredProducts = products.filter(product => {
//     return (
//       (typeFilter === '' || product.type === typeFilter) &&
//       (priceFilter === '' || 
//         (priceFilter === 'low' && product.price < 30) ||
//         (priceFilter === 'mid' && product.price >= 30 && product.price <= 50) ||
//         (priceFilter === 'high' && product.price > 50))
//     );
//   });

//   return (
//     <main>
//       <div>
//         <label>
//           Filter by type:
//           <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
//             <option value="">All</option>
//             <option value="Skin">Skin</option>
//             <option value="Face">Face</option>
//           </select>
//         </label>
//         <label>
//           Filter by price:
//           <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
//             <option value="">All</option>
//             <option value="low">Below $30</option>
//             <option value="mid">$30 - $50</option>
//             <option value="high">Above $50</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         {filteredProducts.map((product, index) => {
//           return (
//             <div key={index} className={styles.ItemCard}>
//               <div>
//                 <h2>{product.name}</h2>
//                 <p>{product.description}</p>
//                 <p>{`$${product.price}`}</p>
//                 <img src={product.photo} alt={product.name} />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Take the Quiz Section */}
//       <section className={styles.quizSection}>
//         <div className={styles.quizContent}>
//           <h2>2 minutes to a new routine</h2>
//           <p>Get a routine for exactly what your skin needs. Plus get a code for 10% off!</p>
//           <a href="https://www.herocosmetics.us/pages/quiz" className={styles.quizButton}>Take the Quiz</a>
//           <img src="/public/skincare.jpg" alt="" className={styles.quizImage} />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Shop;
