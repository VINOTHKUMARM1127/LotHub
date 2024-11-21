import React from "react";

import Card from "../../../Components/card/Card"
import FetchData from "../../../FetchData/FetchData"
import { useParams } from "react-router-dom";

const Similar = () => {
    const { mediatype, id } = useParams()
    const { data, loading } = FetchData(`/${mediatype}/${id}/similar`);
    const title = mediatype === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (

        
            <Card
                title={title}
                data={data?.results}
                loading={loading}
                endpoint={mediatype}
            />
        
    );
};

export default Similar;
