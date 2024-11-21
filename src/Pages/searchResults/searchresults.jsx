import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../api.js";
import MovieCard from "../../Components/movieCard/MovieCard.jsx";
import "./searchResults.css";
import FetchData from "../../FetchData/FetchData"
import Card from "../../Components/card/Card"

const SearchResults = () => {
  const { query } = useParams();
  const { data, loading } = FetchData(`/search/multi?query=${query}&page=1`);
  console.log(data?.results)
  return (
    <>

      <MovieCard data={data?.results} loading={loading} />

    </>
  );
};

export default SearchResults;
