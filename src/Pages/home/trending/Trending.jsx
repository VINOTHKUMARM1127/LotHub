import React, { useState } from "react";

import Card from "../../../Components/card/Card";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";

import FetchData from "../../../FetchData/FetchData";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = FetchData(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <div className="box">
                <span className="Title">Trending</span>
                <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
            </div>
            <Card data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
