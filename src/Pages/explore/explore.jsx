import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../Components/movieCard/MovieCard.jsx";
import "./explore.css";
import { fetchDataFromApi } from "../../api.js";

const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { mediatype } = useParams();


  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/discover/${mediatype}?page=1`).then((res) => {
      setData(res);
      setPageNum(2);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/discover/${mediatype}?page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [mediatype]);

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBloc skeleton"></div>
        <div className="textBlock">
          <div className="title-ske skeleton"></div>
          <div className="date-ske skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className="loadingSke">
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
        </div>
      ) : (
        <>
          <InfiniteScroll
            className="card-box"
            dataLength={data?.results?.length || 0}
            next={fetchNextPageData}
            hasMore={pageNum <= (data?.total_pages || 0)}
            loader={<div className="loading-text">Loading...</div>}
          >
            {data?.results?.map((item, index) => {
              if (item.media_type === "person") return null;
              return (
                <MovieCard
                  key={index}
                  data={item}
                  loading={loading}
                />
              );
            })}
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default Explore;
