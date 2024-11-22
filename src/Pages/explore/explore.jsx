import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../../Components/movieCard/MovieCard.jsx";
import "./explore.css";
import FetchData from "../../FetchData/FetchData"

const explore = () => {
    const { mediaType } = useParams();
    const { data, loading } = FetchData(`/discover/${mediaType}`);
    console.log(data?.results)
    return (
        <>

            <MovieCard data={data?.results} loading={loading} mediaType={mediaType} />

        </>
    );
};

export default explore;
