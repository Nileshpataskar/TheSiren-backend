import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from './Logo';
import './topart.css'


function TopPart() {
  return (
    <div className="topPart">
      {/* <Logo/> */}
      <div className="navBar">
      <Link to="/home" className="navLink">
          Home
        </Link>
        <Link to="/category/bollywood" className="navLink">
          Bollywood
        </Link>
        <Link to="/category/hollywood" className="navLink">
         Hollywood
        </Link>
        <Link to="/category/technology" className="navLink">
          Technology
        </Link>
        <Link to="/category/fitness" className="navLink">
          Fitness
        </Link>
        <Link to="/category/food" className="navLink">
          Food
        </Link>
      </div>
      <hr></hr>
    </div>
  );
}

export default TopPart;
