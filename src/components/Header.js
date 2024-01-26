import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOSInitializer from "./AOS/AOSInitializer";
import hamburgerImage from "./images/modern.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 769) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    handleWindowResize();
    handleScroll();

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavToggle = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={isScrolled ? "sticky-header" : ""}>
      <AOSInitializer />
      <div className="flex container">
        <Link to="/" id="logo" data-aos="fade-down" data-aos-duration="3000">
          Moore Real Estate.
        </Link>
        <nav>
          <button id="nav-toggle" className="hamburger-menu" onClick={handleNavToggle}>
            <img src={hamburgerImage} alt="Hamburger Menu" />
            <span className="strip"></span>
            <span className="strip"></span>
            <span className="strip"></span>
          </button>
          <ul id="nav-menu" className={isMobileMenuOpen ? "open" : ""} data-aos="fade-down" data-aos-duration="3000">
            <li>
              <Link to="/properties" onClick={closeMenu}>Properties</Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>News</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li id="close-flyout" onClick={closeMenu}>
              <span className="fas fa-times"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
