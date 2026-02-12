import classNames from "classnames";
import Image from "next/image";

import Logo from "../assets/images/logo.svg";
import HomeInactiveIcon from "../assets/images/home_inactive.svg";
import HomeActiveIcon from "../assets/images/home_active.svg";
import WorkInactiveIcon from "../assets/images/works_inactive.svg";
import WorkActiveIcon from "../assets/images/work_active.svg";
import ContactInactiveIcon from "../assets/images/contact_inactive.svg";
import ContactActiveIcon from "../assets/images/contact_active.svg";
import AboutInactiveIcon from "../assets/images/about_inactive.svg";
import AboutActiveIcon from "../assets/images/about_active.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import InstagramIcon from "../assets/images/instagram_sm.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import DribbleIcon from "../assets/images/dribble.svg";
import NavItem from "./NavItem";
import SocialItem from "./SocialItem";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Link href="./">
            <Image className="icon" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="social-elements">
          <SocialItem
            path="https://dribbble.com/inspired_monster"
            icon={DribbleIcon}
          />
          <SocialItem
            path="https://twitter.com/inspired_monstr"
            icon={TwitterIcon}
          />
          <SocialItem
            path="https://www.linkedin.com/in/arunsajeev/"
            icon={LinkedinIcon}
          />
          <SocialItem
            path="https://www.instagram.com/inspired_monster/"
            icon={InstagramIcon}
          />
        </div>
        <div className="nav-items">
          <NavItem
            path="/"
            inactiveIcon={HomeInactiveIcon}
            activeIcon={HomeActiveIcon}
            active={router.pathname === "/"}
          >
            Home
          </NavItem>
          <NavItem
            path="/about-me/"
            inactiveIcon={AboutInactiveIcon}
            activeIcon={AboutActiveIcon}
            active={router.pathname === "/about-me"}
          >
            About me
          </NavItem>
          <NavItem
            path="/works/"
            inactiveIcon={WorkInactiveIcon}
            activeIcon={WorkActiveIcon}
            active={
              router.pathname === "/works" ||
              router.pathname === `/works/[workId]`
            }
          >
            Works
          </NavItem>
          <NavItem
            path="/contact"
            inactiveIcon={ContactInactiveIcon}
            activeIcon={ContactActiveIcon}
            active={router.pathname === "/contact"}
          >
            Contact
          </NavItem>
        </div>
      </div>
    </header>
  );
};

export default Header;
