import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar({ onSelectCategory, onSelectBrand }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="main">
      <nav>
        <div className="navbar-container">
          <div className="menu-container">
            <Menu className="menuButton" onClick={toggleDropdown} />
          </div>

          {dropdownOpen && (
            <ul className="nav-list-mobile">
              <li>
                  <Link to="/home">
                    Home
                  </Link>
              </li>

              <li>
                <Link to="/category/bollywood" className="nav mobile">
                  Bollywood
                </Link>
              </li>
              <li>
                <Link to="/category/hollywood" className="nav mobile"    >
                  Hollywood
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="nav mobile"  >
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/fitness" className="nav mobile"
                 >
                Fitness
                </Link>

              </li>
              <li>
                <Link to="/category/food" className="nav mobile"
                 >
                Food
                </Link>

              </li>
              
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
