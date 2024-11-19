import React from "react";

import Card from "../../../Components/card/Card"
import FetchData from "../../../FetchData/FetchData"
import { useParams } from "react-router-dom";

const Similar = () => {
    const { mediatype, id } = useParams()
    const { data, loading } = FetchData(`/${mediatype}/${id}/similar`);
    console.log(data)
    const title = mediatype === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (

        <div className="carouselSection">
            <div className="box">
                <span className="Title">{title}</span>
            </div>
            <Card
                data={data?.results}
                loading={loading}
                endpoint={mediatype}
            />
        </div>
    );
};

export default Similar;
