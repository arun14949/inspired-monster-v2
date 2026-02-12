import classNames from "classnames";
import Image from "next/image";
const Button = ({
  children,
  className,
  icon,
  onClick,
  disabled,
  fullwidth,
  variant = "whatsapp",
}) => {
  return (
    <button
      className={classNames(className, "btn", fullwidth && "btn-full-width")}
      disabled={disabled}
      onClick={onClick ? onClick : undefined}
    >
      {icon && (
        <span
          className={classNames(
            "icon prepend",
            variant === "whatsapp" ? "whatsapp" : "dribble"
          )}
        >
          <Image className="icon" src={icon} alt="nav" />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
