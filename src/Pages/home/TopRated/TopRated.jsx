import React, { useState } from "react";

import Card from "../../../Components/card/Card";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";

import FetchData from "../../../FetchData/FetchData";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = FetchData(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movie" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <div className="box">
                <span className="Title">Top Rated</span>
                <SwitchTabs data={["Movie", "Tv Shows"]} onTabChange={onTabChange} />
            </div>
            <Card data={data?.results} loading={loading} />
        </div>
    );
};

export default TopRated
