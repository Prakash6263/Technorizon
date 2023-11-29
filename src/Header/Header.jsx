import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import Images from './Images/ecommmerce.png'

import './Header.css'
const Header = () => {

  return (
    <header>
      <div className="logo_container">
          <img
            className="Ecommmerce_home"
            src={Images}
            alt="Ecommmerce Home"
          />
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        
     
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">0</span>
      </div>
    </header>
  );
};

export default Header;
