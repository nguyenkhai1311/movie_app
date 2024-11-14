import CircularProgressBar from "./CircularProgressBar";
import PropTypes from "prop-types";

const MovieCard = ({ title, releaseDate, posterPath, pointer, mediaType }) => {
  return (
    <div className="relative rounded-lg border border-slate-800">
      {mediaType === "tv" && (
        <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm font-bold text-white">
          TV Show
        </p>
      )}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt=""
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
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  posterPath: PropTypes.string,
  pointer: PropTypes.number,
  mediaType: PropTypes.string,
};

export default MovieCard;
