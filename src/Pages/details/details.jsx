import React from 'react'
import './details.css'
import DetailsBanner from './detailsBanner/DetailsBanner'
import FetchData from '../../FetchData/FetchData'
import { useParams } from 'react-router-dom'
import Similar from './Recomandation/Similar'
import Recommendation from './Recomandation/Recommendation'
import Card from '../../Components/card/Card'

const details = () => {
  const {mediatype, id} = useParams()
  const { data: cast, loading: castloading } = FetchData(`/${mediatype}/${id}/credits`)
  return (
    <>
      <DetailsBanner />
      <Card title={"Top Cast"} data={cast?.cast} loading={castloading}/>
      <Similar />
      <Recommendation />
    </>
  )
}

export default details
