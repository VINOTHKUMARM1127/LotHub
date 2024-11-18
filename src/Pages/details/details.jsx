import React from 'react'
import './details.css'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Trending from '../home/trending/Trending'
import TopRated from '../home/TopRated/TopRated'
import FetchData from '../../FetchData/FetchData'
import { useParams } from 'react-router-dom'
import CastSection from './CastSection/CastSection'

const details = () => {
  const {mediatype, id} = useParams()
  const { data: cast, loading: castloading } = FetchData(`/${mediatype}/${id}/credits`)
  
  return (
    <>
      <DetailsBanner/>
      <CastSection data={cast?.cast} loading={castloading}/>
      <Trending />
      <TopRated />
    </>
  )
}

export default details
