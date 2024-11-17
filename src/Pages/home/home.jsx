import React from 'react'
import './home.css'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './trending/Trending'
const home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
    </div>
  )
}

export default home
