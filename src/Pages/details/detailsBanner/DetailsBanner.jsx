import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./DetailsBanner.css";

import FetchData from "../../../FetchData/FetchData.jsx";


const DetailsBanner = ({ video, crew }) => {

    const { mediatype, id } = useParams();
    const { data, loading } = FetchData(`/${mediatype}/${id}`);
    console.log(data)
    const imgUrl = "https://image.tmdb.org/t/p/original";
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };
    return (
        <div className="detailsBanner">
            {loading ? "loading" : (
                <>
                    {!!data && (
                        <>
                            <div className="details">
                                <div className="left">
                                    <img className="posterImg" src={imgUrl + data.poster_path} />
                                </div>

                                <div className="right">
                                    <div className="title">
                                        {`${data.name || data.title}`}
                                    </div>

                                    <div className="subtitle">
                                        {data.tagline}
                                    </div>
                                    <div className="genres">
                                        {data.genres.map((item) =>{
                                            return(
                                            <div className="genre">
                                                {item.name}
                                            </div>)
                                        })}
                                    </div>

                                    <div className="para">
                                        <div className="heading">
                                            Overview
                                        </div>
                                        <div className="description">
                                            {data.overview}
                                        </div>
                                    </div>

                                    <div className="infoItem">
                                        <span className="text-detail">
                                            Status:
                                            <span className="text-Det">
                                                {data.status}</span>
                                        </span>
                                        <span className="text-detail">
                                        Release Date:
                                         <span className="text-Det">
                                            {data.release_date
                                            ? formatDate(data.release_date)
                                            : formatDate(data.first_air_date)
                                        }</span>
                                        </span>
                                        <span className="text-detail">
                                            Runtime:
                                            <span className="text-Det">
                                                {toHoursAndMinutes(data.runtime)}</span>
                                        </span>
                                    </div><hr />

                                </div>
                            </div>
                        </>
                    )}
                </>
            )

            }
        </div >
    );
};

export default DetailsBanner;
