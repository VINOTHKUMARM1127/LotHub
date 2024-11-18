import React from 'react'
import './details.css'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Trending from '../home/trending/Trending'
import TopRated from '../home/TopRated/TopRated'

const details = () => {
  

  return (
    <>
      <DetailsBanner/>
      <Trending />
      <TopRated />
    </>
  )
}

export default details
