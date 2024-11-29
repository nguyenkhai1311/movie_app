import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const timeoutRef = useRef(null);

  const { data: popularMoviesResponse } = useFetch({ url: `/movie/popular` });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrentIndex((current) =>
  //       current === movies.length - 1 ? 0 : current + 1,
  //     );
  //     setActiveMovieId(movies[currentIndex].id);
  //   };

  //   timeoutRef.current = setTimeout(nextSlide, 5000);

  //   return function () {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   };
  // }, [movies, currentIndex]);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => {
          return <Movie key={movie.id} data={movie} />;
        })}

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovies;
