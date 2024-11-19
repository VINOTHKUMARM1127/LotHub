import React from 'react'
import { useParams } from 'react-router-dom'
import FetchData from '../../../FetchData/FetchData'
import Card from '../../../Components/card/Card'

const Recommendation = () => {
    const { mediatype, id } = useParams()
    const { data, loading } = FetchData(`/${mediatype}/${id}/recommendations`)
    return (

        <div className="carouselSection">
            <div className="box">
                <span className="Title">Recommendations</span>
            </div>
            <Card
                data={data?.results}
                loading={loading}
                endpoint={mediatype}
            />
        </div>
    )
}

export default Recommendation
