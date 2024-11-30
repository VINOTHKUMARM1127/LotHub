import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./DetailsBanner.css";

import FetchData from "../../../FetchData/FetchData.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ActorDet = () => {

    const { id } = useParams();
    const { data, loading } = FetchData(`/person/${id}`);
    const imgUrl = "https://image.tmdb.org/t/p/original";
    const [expand, setExpand] = useState(false)
    const Loader = ({ src, className = "" }) => (
        <LazyLoadImage className={className} alt="" effect="blur" src={src} />
    );

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const bgImg = imgUrl + data?.profile_path;

    const cutBiography = (biography) => {
        return biography?.split(" ").slice(0, 50).join(" ") + (biography?.split(" ").length > 50 ? "..." : "");
    };

    return (
        <div className="detailsBanner" style={{ "--bg-image": `url(${bgImg})`, }}>
            <div className="opacity-layer"></div>
            {loading ? (
                <div className="detailsBannerSkeleton">

                    <div className="poster-pic skeleton"></div>
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
                                <div className="poster-pic">
                                    <LazyLoadImage className="poster" src={imgUrl + data.profile_path} />
                                </div>

                                <div className="right">
                                    <div className="title">
                                        {`${data.name}`}
                                    </div>

                                    <div className="subtitle">
                                        {data.known_for_department}
                                    </div>

                                    <div className="para">
                                        <div className="heading">
                                            Biography
                                        </div>
                                        <div className="description">
                                            {expand ? data.biography : cutBiography(data.biography)}
                                        </div>
                                        <button className="show-more-btn" onClick={() => setExpand(!expand)}>
                                            {expand ? "Show less" : "Show more"}
                                        </button>

                                    </div>

                                    <div className="infoItem">
                                        <span className="text-detail">
                                            Birth Place:
                                            <span className="text-Det">
                                                {data.place_of_birth}</span>
                                        </span>

                                    </div><hr />
                                    <div className="infoItem">

                                        <span className="text-detail">
                                            Birth Date:
                                            <span className="text-Det">
                                                {formatDate(data.birthday)}
                                            </span>
                                        </span>

                                    </div><hr />
                                    <div className="infoItem">

                                        <span className="text-detail">
                                            Death Date:
                                            <span className="text-Det">
                                                {data.deathday ? formatDate(data.deathday) : "Still Alive"}
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

export default ActorDet
