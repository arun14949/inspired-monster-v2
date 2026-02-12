import classNames from "classnames";

const Shimmer = ({ avatar = false, width, height }) => {
  return (
    <div
      className={classNames("shimmer", avatar && "avatar")}
      style={{
        width: width ? width : "100%",
        height: height ? height : "100%",
        position: "absolute",
        top: 0,
      }}
    />
  );
};

export default Shimmer;
