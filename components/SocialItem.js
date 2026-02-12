import Image from "next/image";

const SocialItem = ({ path, icon }) => {
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <div className="social">
        <Image className="icon" src={icon} alt="nav" />
      </div>
    </a>
  );
};

export default SocialItem;
