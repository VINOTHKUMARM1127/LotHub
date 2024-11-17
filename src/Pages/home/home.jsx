import React from 'react'
import './home.css'
import HeroBanner from './heroBanner/heroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './TopRated/TopRated'
const home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default home
