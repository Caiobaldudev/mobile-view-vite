import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import useMedia from "../../Hooks/useMedia";

const Header = () => {
  const mobile = useMedia("(max-width: 40rem");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const navigate = useNavigate();

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <header className={styles.header}>
        <nav className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}>
          <NavLink to="/">{mobile && "Home"}</NavLink>
          <NavLink to="/about">{mobile && "About"}</NavLink>
          <NavLink to="/contact">{mobile && "Contact"}</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
