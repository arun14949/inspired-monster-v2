import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const NavItem = ({
  path,
  children,
  inactiveIcon,
  activeIcon,
  active = false,
}) => {
  return (
    <Link href={path}>
      <div className={classNames("nav-item", active && "active")}>
        <div className="content">
          <div className="icon-container">
            <Image
              className="icon"
              src={active ? activeIcon : inactiveIcon}
              alt="nav"
            />
          </div>
          <span>{children}</span>
        </div>
      </div>
    </Link>
  );
};

export default NavItem;
