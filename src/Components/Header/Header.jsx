
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import './Header.css'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };


  return (
    <nav>
      <h1>LOT<span className='redd '>HUB</span></h1>
      <div className="MenuItems">
        <li className="MenuItem">MOVIES</li>
        <li className="MenuItem">TV SHOWS</li>
        <li className="MenuItem"><HiOutlineSearch /></li>
      </div>
      <div className="mobileMenuItems ">
        <HiOutlineSearch />
        {mobileMenu ? 
          <VscChromeClose onClick={toggleMobileMenu}/>
         : 
          <SlMenu onClick={toggleMobileMenu}/>}
        
      </div>
      {mobileMenu && (
        <div className="mobileView">
          <ul className="menuItems">
            <li className="menuItem">MOVIES</li>
            <li className="menuItem">TV SHOWS</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Header
