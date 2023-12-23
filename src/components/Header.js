import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOSInitializer from "./AOS/AOSInitializer";
import $ from "jquery";
import hamburgerImage from "./images/modern.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleNavToggle = () => {
      $("#nav-menu").toggleClass("open");
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    $("#nav-toggle").click(handleNavToggle);

    $("#close-flyout").click(() => {
      $("#nav-menu").removeClass("open");
      setIsMobileMenuOpen(false);
    });

    $("#nav-menu a").click(() => {
      $("#nav-menu").removeClass("open");
      setIsMobileMenuOpen(false);
    });

    const handleWindowResize = () => {
      if (window.innerWidth >= 769) {
        $(".hamburger-menu").hide();
      } else {
        $(".hamburger-menu").show();
      }
    };

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    handleWindowResize();
    handleScroll();

    $(window).resize(handleWindowResize);
    $(window).scroll(handleScroll);

    return () => {
      $(window).off("resize", handleWindowResize);
      $(window).off("scroll", handleScroll);
      $("#nav-toggle").off("click", handleNavToggle);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={isScrolled ? "sticky-header" : ""}>
      <AOSInitializer />
      <div className="flex container">
        <Link to="/" id="logo" data-aos="fade-down" data-aos-duration="3000">
          Moore Real Estate.
        </Link>
        <nav>
          <button id="nav-toggle" className="hamburger-menu">
            <img src={hamburgerImage} alt="Hamburger Menu" />
            <span className="strip"></span>
            <span className="strip"></span>
            <span className="strip"></span>
          </button>
          <AOSInitializer />
          <ul id="nav-menu" data-aos="fade-down" data-aos-duration="3000">
            <li>
              <a
                href="http://www.google.com"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Properties
              </a>
            </li>

            <li>
              <a href="#">News</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li id="close-flyout">
              <span className="fas fa-times"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
