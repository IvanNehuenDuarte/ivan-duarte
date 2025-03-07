/*
 * Node modules
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const { t, i18n } = useTranslation();

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox();

    window.addEventListener("resize", initActiveBox);

    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  useEffect(() => {
    initActiveBox();
  }, [i18n.language]);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    initActiveBox();
  };

  const navItems = [
    {
      label: t("nav.home"),
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: t("nav.about"),
      link: "#about",
      className: "nav-link",
    },
    {
      label: t("nav.work"),
      link: "#work",
      className: "nav-link",
    },
    // {
    //   label: "Reviews",
    //   link: "#reviews",
    //   className: "nav-link",
    // },
    {
      label: t("nav.contact"),
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
