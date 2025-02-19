import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
      <nav>
            <span><img src="./public/images/OIP (1).jpeg" alt="" /><em>Cake</em></span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li ><Link to="/order"><button className="box">Order <i className="fa-solid fa-cart-shopping"></i></button></Link></li>
            </ul>
      </nav>
    </div>
  )
}

export default navbar
