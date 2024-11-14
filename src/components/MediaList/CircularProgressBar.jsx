import PropTypes from "prop-types";

const CircularProgressBar = ({
  percent = 0,
  size = 3,
  strokeWidth = 0.25,
  strokerColor = "green",
}) => {
  const radius = size / 2 - strokeWidth;

  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokerColor}
          fill="none"
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * radius * Math.PI}vw`} // dash = 1 => dash | gap | dash | gap....
          // Chu vi hình tròn: 2 * r * pi
          strokeDashoffset={`${2 * radius * Math.PI * (1 - percent / 100)}vw`}
          style={{ transformOrigin: "center" }}
          transform="rotate(-90)"
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize="1.2vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percent: PropTypes.number,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokerColor: PropTypes.string,
};

export default CircularProgressBar;
