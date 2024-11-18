import React, { useState } from "react";

import Card from "../../../Components/card/Card";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";

import FetchData from "../../../FetchData/FetchData";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = FetchData(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movie" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <div className="box">
                <span className="Title">Popular</span>
                <SwitchTabs data={["Movie", "Tv Shows"]} onTabChange={onTabChange} />
            </div>
            <Card data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    );
};

export default Popular
