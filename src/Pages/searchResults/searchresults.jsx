import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../../Components/movieCard/MovieCard.jsx";
import "./searchResults.css";
import FetchData from "../../FetchData/FetchData"

const SearchResults = () => {
  const { query } = useParams();
  const { data, loading } = FetchData(`/search/multi?query=${query}&page=1`);

  return (
    <>

      <MovieCard data={data?.results} loading={loading} />

    </>
  );
};

export default SearchResults;
