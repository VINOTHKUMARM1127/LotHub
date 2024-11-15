import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav>
        <h1>LOT<span className='redd '>HUB</span></h1>
        <div className="con">
            <a href="/">MOVIES</a>
            <a href="/">TV SHOWS</a>
        </div>
    </nav>
  )
}

export default Header
