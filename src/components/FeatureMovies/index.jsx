import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const timeoutRef = useRef(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWVkODYxMDRmZjBhNzZiZTRmZjg3NjYyOGRhNjUzMyIsIm5iZiI6MTczMTM0NjE0Ni4yMzU4ODg3LCJzdWIiOiI2NzMyM2RkOWI2YTJhOWYxNGEyYjhmZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DtcZJ4S0I6q-A9SOPPphwleB9Z-EQWuTE1u9sBG6L8w",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    });
  }, []);

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
