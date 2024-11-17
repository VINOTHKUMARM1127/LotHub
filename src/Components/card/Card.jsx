import { useRef } from "react";
import "./Card.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Card = ({ data, loading }) => {
  const listRef = useRef(null);

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
                  <div className="news" key={curItem.id}>
                    <div className="posterBlock">
                      <img
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
                        {curItem.release_date || curItem.first_air_date}
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
