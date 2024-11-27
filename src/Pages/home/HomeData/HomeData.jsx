import React, { useState } from "react";

import Card from "../../../Components/card/Card";
import SwitchTabs from "../../../Components/switchTabs/SwitchTabs";

import FetchData from "../../../FetchData/FetchData";

const HomeData = ({head, dataOne,dataTwo ,Start,End}) => {
  const [endpoint, setEndpoint] = useState(dataOne);

    const { data, loading } = FetchData(`${Start}${endpoint}${End}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === dataOne ? dataOne : dataTwo);
    };

    return (
        <div className="carouselSection">
            <div className="box">
                <span className="Title">{head}</span>
                <SwitchTabs data={[dataOne, dataTwo]} onTabChange={onTabChange} />
            </div>
            <Card data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default HomeData
