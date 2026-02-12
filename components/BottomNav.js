import NavItem from "./NavItem";
import HomeInactiveIcon from "../assets/images/home_inactive.svg";
import HomeActiveIcon from "../assets/images/home_active.svg";
import WorkInactiveIcon from "../assets/images/works_inactive.svg";
import WorkActiveIcon from "../assets/images/work_active.svg";
import ContactInactiveIcon from "../assets/images/contact_inactive.svg";
import ContactActiveIcon from "../assets/images/contact_active.svg";
import AboutInactiveIcon from "../assets/images/about_inactive.svg";
import AboutActiveIcon from "../assets/images/about_active.svg";
import { useRouter } from "next/router";

const BottomNav = () => {
  const router = useRouter();
  return (
    <div className="bottom-nav">
      <NavItem
        path="/"
        inactiveIcon={HomeInactiveIcon}
        activeIcon={HomeActiveIcon}
        active={router.pathname === "/"}
      >
        Home
      </NavItem>
      <NavItem
        path="/works"
        inactiveIcon={WorkInactiveIcon}
        activeIcon={WorkActiveIcon}
        active={router.pathname === "/works"}
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
      <NavItem
        path="/about-me"
        inactiveIcon={AboutInactiveIcon}
        activeIcon={AboutActiveIcon}
        active={router.pathname === "/about-me"}
      >
        About
      </NavItem>
    </div>
  );
};

export default BottomNav;
