import NoPoster from "../../assets/no-poster.png"
import "./MovieCard.css"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieCard = ({ data, loading  }) => {
  const { mediaType } = useParams();
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const Loader = ({ src, className = "" }) => (
    <LazyLoadImage className={className} alt="" effect="blur" src={src} />
  );

  let imgUrl = data.poster_path
    ? "https://image.tmdb.org/t/p/original" + data.poster_path
    : NoPoster;

  return (
    <>
        <div className="news" key={data.id}
          onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}>
          <div className="posterBloc">
            <img
              className="imag"
              src={imgUrl}
              alt=""
            />
          </div>
          <div className="content-box">
            <h5 className="title-text">
              {data.name || data.title}
            </h5>
            <p className="date">
              {data.release_date
                ? formatDate(data.release_date)
                : formatDate(data.first_air_date)}
            </p>

          </div>
        </div>
      
        
      </>
  );
};

export default MovieCard;
