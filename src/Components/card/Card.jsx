import { useRef } from "react";
import "./Card.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import noPoster from '../../assets/no-poster.png'

const Card = ({ data, loading, endpoint, title }) => {
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

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title-ske skeleton"></div>
          <div className="date-ske skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="card-com">
      {title && <div className="display-text">{title}</div>}
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
          (
            <div className="loadingSkeleton">
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
          )
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
                        src={curItem.poster_path
                          ? imgUrl + curItem.poster_path
                          : curItem.profile_path
                            ? imgUrl + curItem.profile_path
                            : noPoster}
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
                          : curItem.first_air_date
                            ? formatDate(curItem.first_air_date)
                            : curItem.character}
                      </p>


                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
