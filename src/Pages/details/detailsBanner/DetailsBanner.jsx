import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./DetailsBanner.css";

import FetchData from "../../../FetchData/FetchData.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";


const DetailsBanner = () => {

    const { mediatype, id } = useParams();
    const { data, loading } = FetchData(`/${mediatype}/${id}`);
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
    const Loader = ({ src, className = "" }) => (
        <LazyLoadImage className={className} alt="" effect="blur" src={src} />
    );

    const bgImg = imgUrl + data?.backdrop_path;
    return (
        <div className="detailsBanner" style={{ "--bg-image": `url(${bgImg})`, }}>
            <div className="opacity-layer"></div>
            {loading ? (
                <div className="detailsBannerSkeleton">
                    
                        <div className="left-side poster-pic skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    
                </div>
            ) : (
                <>
                    {!!data && (
                        <>
                            <div className="details" >
                                <div className="left">
                                    <LazyLoadImage className="poster-pic" src={imgUrl + data.poster_path} />
                                </div>

                                <div className="right">
                                    <div className="title">
                                        {`${data.name || data.title}`}
                                    </div>

                                    <div className="subtitle">
                                        {data.tagline}
                                    </div>
                                    <div className="genres">
                                        {data.genres.map((item, key) => {
                                            return (
                                                <div className="genre" key={(key)}>
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

                                    <div className="infoItem">

                                        <span className="text-detail">
                                            Production:
                                            <span className="text-Det">
                                                {data.production_companies.map((item) => item.name).join(" , ")}
                                            </span>
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
