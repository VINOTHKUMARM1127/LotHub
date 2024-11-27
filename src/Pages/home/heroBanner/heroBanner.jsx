import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './heroBanner.css'
import FetchData from '../../../FetchData/FetchData'

const heroBanner = () => {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const { data, loading } = FetchData("/trending/movie/week")

  useEffect(() => {
    const bg = "https://image.tmdb.org/t/p/original" + (data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path)
    setBackground(bg)
  }, [data])

  const searchBut = (event) => {
    if (query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  const searchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setShowSearch(false);
    }
  };
  const Loader = ({ src, className = "" }) => (
    <LazyLoadImage className={className} alt="" effect="blur" src={src} />
  );

  return (
    <div className="heroBanner">
      {!loading && (<div className="backdrop-img">
        <img className='bg-img' src={background} />
      </div>
      )}

      <div className="opacity-layer"></div>

      <div className="heroBannerContent">
        <span className="title">Welcome</span>
        <span className="subTitle">Millions of movies, TV shows and people to discover.
          Explore now</span>
        {/* <div className="searchInput">
          <input type="text" className='input-box' placeholder='Search for a Movie or TV show'
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQuery} autoComplete="off"/>
          <button className='search-but' onClick={searchBut}>Search</button>
        </div> */}
      </div>

    </div>
  )
}

export default heroBanner
