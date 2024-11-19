
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import './Header.css'


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const openSearch = () => {
    setShowSearch(true);
};
const searchQuery = (event) => {
  if (event.key === "Enter" && query.length > 0) {
    navigate(`/search/${query}`)
  }
}

  return (
    <nav>
      <h1>LOT<span className='redd '>HUB</span></h1>
      <div className="MenuItems">
        <li className="MenuItem" onClick={()=> navigate("/explore/movie")}>MOVIES</li>
        <li className="MenuItem" onClick={()=> navigate("/explore/tv")}>TV SHOWS</li>
        <li className="MenuItem"><HiOutlineSearch onClick={openSearch} className="icon search-menu"/></li>
      </div>
      <div className="mobileMenuItems ">
        <HiOutlineSearch className="icon search-menu" onClick={openSearch}/>
        {mobileMenu ? 
          <VscChromeClose className="icon close-menu" onClick={toggleMobileMenu}/>
         : 
          <SlMenu className="icon open-menu" onClick={toggleMobileMenu}/>}
        
      </div>
      {mobileMenu && (
        <div className="mobileView">
          <ul className="menuItems">
            <li className="menuItem" onClick={()=> navigate("/explore/movie")}>MOVIES</li>
            <li className="menuItem" onClick={()=> navigate("/explore/tv")}>TV SHOWS</li>
          </ul>
        </div>
      )}
                  {showSearch && (
                <div className="searchBar">
                    
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQuery}
                            />
                            <VscChromeClose className="close-btn"
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    
                </div>
            )}
    </nav>
  )
}

export default Header
