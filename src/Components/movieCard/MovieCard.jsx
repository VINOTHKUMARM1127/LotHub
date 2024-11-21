import NoPoster from "../../assets/no-poster.png"
import "./MovieCard.css"
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieCard = ({ data, loading }) => {

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  
  const Loader = ({ src, className = "" }) => (
    <LazyLoadImage className={className} alt="" effect="blur" src={src} />
);


  return (
    <>
        {loading ? (
          loading
        ) : (
          <div className="Card" >
            {!data
              ? "No Result Found"
              : data.map((curItem) => {
                let imgUrl = curItem.poster_path 
                ? "https://image.tmdb.org/t/p/original" + curItem.poster_path 
                : NoPoster ;
                return (
                    <div className="news" key={curItem.id} 
                    onClick={() => navigate(`/${curItem.media_type || endpoint}/${curItem.id}`)}>
                      <div className="posterBlock">
                        <Loader
                          className="image"
                          src={imgUrl}
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
      
    </>
  );
};

export default MovieCard;
