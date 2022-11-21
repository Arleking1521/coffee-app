import React from 'react';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {  Nav, Navbar } from 'react-bootstrap'

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";

import Logo from "./images/logo.png";
import Ci1 from "./images/cart-item-1.png";
import Ci2 from "./images/cart-item-2.png";
import Ci3 from "./images/cart-item-3.png";
import Ci4 from "./images/cart-item-4.png";

function App() {
  return (
    <>

      <style type='text/css'>
        {`
          :root{ 
            --main-color:#d3ad7f;
            --black:#13131a;
            --bg:#010103;
            --border:.1rem solid rgba(255,255,255,.3);
          }

          *{
            font-family: 'Roboto', sans-serif;
            margin:0; padding:0;
            box-sizing: border-box;
            outline: none; border:none;
            text-decoration: none;
            text-transform: capitalize;
            transition: .2s linear;
            font-size: 62.5%;
          }

          body{
            background: var(--bg);
          }
          
          section{
              padding:2rem 7%;
          }
          
          .heading{
              text-align: center;
              color:#fff;
              text-transform: uppercase;
              padding-bottom: 3.5rem;
              font-size: 4rem;
          }
          
          .heading span{
              color:var(--main-color);
              text-transform: uppercase;
          }
          
          .btn{
              margin-top: 1rem;
              display: inline-block;
              padding:.9rem 3rem;
              font-size: 1.7rem;
              color:#fff;
              background: var(--main-color);
              cursor: pointer;
          }
          
          .btn:hover{
              letter-spacing: .2rem;
          }
          
          .header{
              background: var(--bg);
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding:1.5rem 7%;
              border-bottom: var(--border);
              position: fixed;
              top:0; left: 0; right: 0;
              z-index: 1000;
          }
          
          .header .logo img{
              height: 6rem;
          }
          
          .header .navbar a{
              margin:0 1rem;
              font-size: 1.6rem;
              color:#fff;
              cursor: pointer;
          }
          
          .header .navbar a:hover{
              color:var(--main-color);
              border-bottom: .1rem solid var(--main-color);
              padding-bottom: .5rem;
          }
          
          .header .icons div{
              color:#fff;
              cursor: pointer;
              font-size: 2.5rem;
              margin-left: 2rem;
          }
          
          .header .icons div:hover{
              color:var(--main-color);
          }
          
          #menu-btn{
              display: none;
          }
          
          .header .search-form{
              position: absolute;
              top:115%; right: 7%;
              background: #fff;
              width: 50rem;
              height: 5rem;
              display: flex;
              align-items: center;
              transform: scaleY(0);
              transform-origin: top;
          }
          
          .header .search-form.active{
              transform: scaleY(1);
          }
          
          .header .search-form input{
              height: 100%;
              width: 100%;
              font-size: 1.6rem;
              color:var(--black);
              padding:1rem;
              text-transform: none;
          }
          
          .header .search-form label{
              cursor: pointer;
              font-size: 2.2rem;
              margin-right: 1.5rem;
              color:var(--black);
          }
          
          .header .search-form label:hover{
              color:var(--main-color);
          }
          
          .header .cart-items-container{
              position: absolute;
              top:100%; right: -100%;
              height: calc(100vh - 9.5rem);
              width: 35rem;
              background: #fff;
              padding:0 1.5rem;
          }
          
          .header .cart-items-container.active{
              right: 0;
          }
          
          .header .cart-items-container .cart-item{
              position: relative;
              margin:2rem 0;
              display: flex;
              align-items: center;
              gap:1.5rem;
          }
          
          .header .cart-items-container .cart-item .fa-times{
              position: absolute;
              top:1rem; right: 1rem;
              font-size: 2rem;
              cursor: pointer;
              color: var(--black);
          }
          
          .header .cart-items-container .cart-item .fa-times:hover{
              color:var(--main-color);
          }
          
          .header .cart-items-container .cart-item img{
              height: 7rem;
          }
          
          .header .cart-items-container .cart-item .content h3{
              font-size: 2rem;
              color:var(--black);
              padding-bottom: .5rem;
          }
          
          .header .cart-items-container .cart-item .content .price{
              font-size: 1.5rem;
              color:var(--main-color);
          }
          
          .header .cart-items-container .btn{
              width: 100%;
              text-align: center;
          }

          .footer{
            background:var(--black);
            text-align: center;
          }

          .footer .share{
            padding:1rem 0;
          }

          .footer .share a{
            height: 5rem;
            width: 5rem;
            line-height: 5rem;
            font-size: 2rem;
            color:#fff;
            border:var(--border);
            margin:.3rem;
            border-radius: 50%;
          }

          .footer .share a:hover{
            background-color: var(--main-color);
          }

          .footer .links{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding:2rem 0;
            gap:1rem;
          }

          .footer .links a{
            padding:.7rem 2rem;
            color:#fff;
            border:var(--border);
            font-size: 2rem;
          }

          .footer .links a:hover{
            background:var(--main-color);
          }

          .footer .credit{
            font-size: 2rem;
            color:#fff;
            font-weight: lighter;
            padding:1.5rem;
          }

          .footer .credit span{
            color:var(--main-color);
          }
        `}
      </style>
      <Router>
        <body>
          <header className="header">

            <a href="#" className="logo">
              <img src={Logo} alt="" />
            </a>

            <Navbar className="navbar">
              <Nav.Link as={Link} to="/">home</Nav.Link>
              <Nav.Link as={Link} to="/about">about</Nav.Link>
              <Nav.Link as={Link} to="/menu">menu</Nav.Link>
            </Navbar>

            <div className="icons">
              <div className="fas fa-search" id="search-btn"></div>
              <div className="fas fa-shopping-cart" id="cart-btn"></div>
              <div className="fas fa-bars" id="menu-btn"></div>
            </div>

            <div className="search-form">
              <input type="search" id="search-box" placeholder="search here..." />
              <label for="search-box" className="fas fa-search"></label>
            </div>

            <div className="cart-items-container">
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci1} alt="" />
                <div className="content">
                  <h3>cart item 01</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci2} alt="" />
                <div className="content">
                  <h3>cart item 02</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci3} alt="" />
                <div className="content">
                  <h3>cart item 03</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <div className="cart-item">
                <span className="fas fa-times"></span>
                <img src={Ci4} alt="" />
                <div className="content">
                  <h3>cart item 04</h3>
                  <div className="price">$15.99/-</div>
                </div>
              </div>
              <a href="#" className="btn">checkout now</a>
            </div>

          </header>

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/menu' element={<Menu />} />
            <Route exact path='/about' element={<About />} />
          </Routes>


          <section className="footer">

            <div className="share">
              <a href="https://www.facebook.com/profile.php?id=100009478044036" className="fab fa-facebook-f"></a>
              <a href="https://twitter.com/?lang=ru" className="fab fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
              <a href="https://ru.linkedin.com/" className="fab fa-linkedin"></a>
              <a href="https://ru.pinterest.com/" className="fab fa-pinterest"></a>
            </div>

            <Navbar className="links">
              <Nav.Link as={Link} to="/">home</Nav.Link>
              <Nav.Link as={Link} to="/menu">menu</Nav.Link>
              <Nav.Link as={Link} to="/about">about</Nav.Link>
            </Navbar>
          </section>
        </body>
      </Router>
    </>
  );
}

export default App;
