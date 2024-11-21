import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const openSearch = () => {
    setShowSearch(true);
  };

  const searchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      navigate(`/search/${query}`);
      setShowSearch(false);
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={showHeader ? "" : "hide"}>
        <h1>
          LOT<span className="redd">HUB</span>
        </h1>
        <div className="MenuItems">
          <li className="MenuItem" onClick={() => navigate("/explore/movie")}>
            MOVIES
          </li>
          <li className="MenuItem" onClick={() => navigate("/explore/tv")}>
            TV SHOWS
          </li>
          <li className="MenuItem">
            <HiOutlineSearch onClick={openSearch} className="icon search-menu" />
          </li>
        </div>
        <div className="mobileMenuItems ">
          <HiOutlineSearch className="icon search-menu" onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose className="icon close-menu" onClick={toggleMobileMenu} />
          ) : (
            <SlMenu className="icon open-menu" onClick={toggleMobileMenu} />
          )}
        </div>
        {mobileMenu && (
          <div className="mobileView">
            <ul className="menuItems">
              <li className="menuItem" onClick={() => navigate("/explore/movie")}>
                MOVIES
              </li>
              <li className="menuItem" onClick={() => navigate("/explore/tv")}>
                TV SHOWS
              </li>
            </ul>
          </div>
        )}
      </nav>
      {showSearch && (
        <div className="searchBar">
          <input
            className="Search-input"
            type="text"
            placeholder="Search for a movie or tv show...."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQuery}
          />
          <VscChromeClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>
      )}
    </>
  );
};

export default Header;
