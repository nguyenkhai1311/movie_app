import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      // clean up function
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      className={currentSrc === src ? className : `${className} blur-md`}
      src={currentSrc}
      width={width}
      height={height}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default ImageComponent;
