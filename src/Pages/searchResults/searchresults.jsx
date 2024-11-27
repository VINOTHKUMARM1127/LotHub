import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../Components/movieCard/MovieCard.jsx";
import "./searchResults.css";
import { fetchDataFromApi } from "../../api.js";

const SearchResults = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum(2);
      setLoading(false);
    }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

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
        (
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
        )
      ) : (
        <>

          <InfiniteScroll
            className="card-box"
            dataLength={data?.results?.length || []}
            next={fetchNextPageData}
            hasMore={pageNum <= data?.total_pages}
            loader={(<div className="loading-text">
              Loading...
            </div>)}
          >
            {data?.results.map((item, index) => {
              if (item.media_type === "person") return;
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


export default SearchResults;
