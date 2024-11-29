import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [isRelatedMediaListLoading, setIsRelatedMediaListLoading] =
  //   useState(false);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWVkODYxMDRmZjBhNzZiZTRmZjg3NjYyOGRhNjUzMyIsIm5iZiI6MTczMTYwMzQ5My40OTczMDA2LCJzdWIiOiI2NzMyM2RkOWI2YTJhOWYxNGEyYjhmZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VOFTx2gjPR6f0NNXhav0fTbY2q5oPcgrjogqH-5KICU",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  useEffect(() => {
    // setIsRelatedMediaListLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWVkODYxMDRmZjBhNzZiZTRmZjg3NjYyOGRhNjUzMyIsIm5iZiI6MTczMTYwMzQ5My40OTczMDA2LCJzdWIiOiI2NzMyM2RkOWI2YTJhOWYxNGEyYjhmZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VOFTx2gjPR6f0NNXhav0fTbY2q5oPcgrjogqH-5KICU",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        const currentRelatedMovies = (data.results || []).slice(0, 12);
        setRelatedMovies(currentRelatedMovies);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // setIsRelatedMediaListLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList mediaList={relatedMovies} />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
