import React from 'react'
import './details.css'
import DetailsBanner from './detailsBanner/DetailsBanner'
import FetchData from '../../FetchData/FetchData'
import { useParams } from 'react-router-dom'
import CastSection from './CastSection/CastSection'
import Similar from './Recomandation/Similar'
import Recommendation from './Recomandation/Recommendation'

const details = () => {
  const {mediatype, id} = useParams()
  const { data: cast, loading: castloading } = FetchData(`/${mediatype}/${id}/credits`)
  
  return (
    <>
      <DetailsBanner/>
      <CastSection data={cast?.cast} loading={castloading}/>
      <Similar />
      <Recommendation />
    </>
  )
}

export default details
