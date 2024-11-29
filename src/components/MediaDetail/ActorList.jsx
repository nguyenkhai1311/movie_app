import { useState } from "react";
import PropTypes from "prop-types";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <div>
      <p className="mb-4 font-bold text-[1v.4w]">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {currentActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profilePath={actor.profile_path}
          />
        ))}
      </div>
      <p
        className="mt-1 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

ActorList.propTypes = {
  actors: PropTypes.array,
};

export default ActorList;
