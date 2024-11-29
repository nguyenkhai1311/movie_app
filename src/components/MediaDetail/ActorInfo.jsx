import PropTypes from "prop-types";

const ActorInfo = ({ id, name, character, profilePath }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <img
        className="rounded-lg"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
        alt=""
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {/* <p>18</p> */}
      </div>
    </div>
  );
};

ActorInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  character: PropTypes.string,
  profilePath: PropTypes.string,
};

export default ActorInfo;
