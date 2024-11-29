import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";
import PropTypes from "prop-types";

const RelatedMediaList = ({ mediaList = [], isLoading }) => {
  return (
    <div>
      <p className="mb-4 font-bold text-[1v.4w]">More like this</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title}
              releaseDate={media.release_date}
              posterPath={media.poster_path}
              pointer={media.vote_average}
              mediaType={media.media_type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

RelatedMediaList.propTypes = {
  mediaList: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default RelatedMediaList;
