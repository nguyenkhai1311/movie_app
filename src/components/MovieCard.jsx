import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import ImageComponent from "./ImageComponent";

const MovieCard = ({
  id,
  title,
  releaseDate,
  posterPath,
  pointer,
  mediaType,
}) => {
  return (
    <Link to={`/movie/${id}`} className="rounded-lg border">
      <div className="relative border-slate-800">
        {mediaType === "tv" && (
          <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm font-bold text-white">
            TV Show
          </p>
        )}
        <ImageComponent
          className="w-full rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          width={210}
          height={300}
        />
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(pointer * 10)}
            strokerColor={
              pointer >= 7 ? "green" : pointer >= 5 ? "orange" : "red"
            }
          />
          <p className="font-bold">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  posterPath: PropTypes.string,
  pointer: PropTypes.number,
  mediaType: PropTypes.string,
};

export default MovieCard;
