import React, { useEffect } from 'react';
import './home.css';

const Home = () => {
  useEffect(() => {
    const content = document.querySelector('.content');
    content.classList.add('fade-in');
  }, []);

  return (
    <div className='container'>
      <div className="background"></div>
      <div className="content">
        <div className="right">
          <h3 className="subtitle"><i>Feeling Hungry?</i></h3>
          <h1 className="headline">Order Your Favorite Cake</h1>
          <button className="order-button" aria-label="Order Now">Order Now</button>
        </div>
        <div className="left">
          <img src="/images/home.jpeg" alt="Delicious Cake" className="cake-image large-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
