import React from 'react'
import './home.css'
import HeroBanner from './heroBanner/heroBanner'
import HomeData from './HomeData/HomeData'
const home = () => {
  return (
    <div>
      <HeroBanner />
      <HomeData
        head={"Trending"} dataOne={"day"} dataTwo={"week"} Start={"/trending/movie/"} End={""}
      />
      <HomeData
        head={"Popular"} dataOne={"movie"} dataTwo={"tv"} Start={"/"} End={"/popular"}
      />
      <HomeData
        head={"Top Rated"} dataOne={"movie"} dataTwo={"tv"} Start={"/"} End={"/top_rated"}
      />
      
    </div>
  )
}

export default home
