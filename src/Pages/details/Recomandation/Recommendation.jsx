import React from 'react'
import { useParams } from 'react-router-dom'
import FetchData from '../../../FetchData/FetchData'
import Card from '../../../Components/card/Card'

const Recommendation = () => {
    const { mediatype, id } = useParams()
    const { data, loading } = FetchData(`/${mediatype}/${id}/recommendations`)
    return (

       
            <Card
            title='Recommendations'
                data={data?.results}
                loading={loading}
                endpoint={mediatype}
            />
        
    )
}

export default Recommendation
