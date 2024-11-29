import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MovieCard from "@components/MovieCard";

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId).url;

    if (!url) return null;

    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWVkODYxMDRmZjBhNzZiZTRmZjg3NjYyOGRhNjUzMyIsIm5iZiI6MTczMTYwMzQ5My40OTczMDA2LCJzdWIiOiI2NzMyM2RkOWI2YTJhOWYxNGEyYjhmZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VOFTx2gjPR6f0NNXhav0fTbY2q5oPcgrjogqH-5KICU",
      },
    }).then(async (res) => {
      const data = await res.json();
      const trendingMediaList = data.results.slice(0, 12);
      setMediaList(trendingMediaList);
    });
  }, [tabs, activeTabId]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer px-2 py-1 ${tab.id === activeTabId ? "rounded bg-white text-black" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => (
          <MovieCard
            id={media.id}
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            posterPath={media.poster_path}
            pointer={media.vote_average}
            mediaType={media.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
};

MediaList.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.array,
};

export default MediaList;
