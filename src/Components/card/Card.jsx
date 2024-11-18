import { useRef } from "react";
import "./Card.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ data, loading, endpoint }) => {
  const listRef = useRef(null);
  const navigate = useNavigate();
  const imgUrl = "https://image.tmdb.org/t/p/original";

  const scrollLeft = () => {
    listRef.current.scrollBy({
      top: 0,
      left: -480,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({
      top: 0,
      left: 480,
      behavior: "smooth",
    });
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  
  const Loader = ({ src, className = "" }) => (
    <LazyLoadImage className={className} alt="" effect="blur" src={src} />
);


  return (
    <>
      <div className="card">
        <div className="but">
          <div>
            <button onClick={scrollLeft} className="btn back">
              <IoArrowBackCircleOutline />
            </button>
          </div>
          <div>
            <button onClick={scrollRight} className="btn next">
              <IoArrowBackCircleOutline />
            </button>
          </div>
        </div>
        {loading ? (
          loading
        ) : (
          <div className="list" ref={listRef}>
            {!data
              ? ""
              : data.map((curItem) => {
                return (
                  <div className="news" key={curItem.id} 
                  onClick={() => navigate(`/${curItem.media_type || endpoint}/${curItem.id}`)}>
                    <div className="posterBlock">
                      <Loader
                        className="image"
                        src={imgUrl + curItem.poster_path}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5 className="title-text">
                        {curItem.name || curItem.title}
                      </h5>
                      <p className="date">
                        {curItem.release_date
                          ? formatDate(curItem.release_date)
                          : formatDate(curItem.first_air_date)}
                      </p>

                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
 