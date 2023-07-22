import React from "react";
import { Link } from "react-router-dom";
import "./downpart.css";

const DownPart = ({ scrollTargetRef }) => {
  const handleScroll = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="navBar22">
      {/* Scroll to the target element on click */}
      <Link to="/category/bollywood" className="navLink22" onClick={handleScroll}>
        Bollywood
      </Link>
      <Link to="/category/hollywood" className="navLink22" onClick={handleScroll}>
        Hollywood
      </Link>
      <Link to="/category/technology" className="navLink22" onClick={handleScroll}>
        Technology
      </Link>
      <Link to="/category/fitness" className="navLink22 hide" onClick={handleScroll}>
        Fitness
      </Link>
      <Link to="/category/food" className="navLink22 hide" onClick={handleScroll}>
        Food
      </Link>
    </div>
  );
};

export default DownPart;
