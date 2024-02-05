import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation().pathname;
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  let menuClass = menuClicked ? "translate-y-0" : "-translate-y-full";
  const menuClassMobileOff =
    "flex-col fixed top-0 left-0 justify-center items-center gap-5 bg-secondaryDark w-full h-screen z-20 transform transition-all duration-500 ease-in-out";
  const menuClassMobileOn = "w-full justify-end gap-5 z-20";

  return (
    <header>
      <nav className="p-7 flex items-center absolute w-full">
        {location !== "/" ? (
          <div
            className=" hidden md:block w-24 
            "
          >
            <Link to="/">
              <img src="/img/only-logo.png" alt="logo" />
            </Link>
          </div>
        ) : null}
        <div
          className="relative z-30 cursor-pointer md:hidden
          "
          onClick={handleMenuClicked}
        >
          <Icon icon="ic:round-menu" color="#fee6d8" width="35" />
        </div>
        <ul
          className={`flex ${isMobile ? menuClassMobileOff : menuClassMobileOn}
          ${isMobile ? menuClass : null}`}
          onClick={handleMenuClicked}
        >
          {location !== "/" ? (
            <li
              className="text-primary hover:text-secondaryLight hover:scale-105 transform transition-all duration-500 ease-in-out font-semibold 
            
            "
            >
              <Link to="/">Inicio</Link>
            </li>
          ) : null}
          <li
            className="text-primary hover:text-secondaryLight hover:scale-105 transform transition-all duration-500 ease-in-out font-semibold 
          
          "
          >
            <Link to="/sandblast">Arenado</Link>
          </li>
          <li
            className="text-primary hover:text-secondaryLight hover:scale-105 transform transition-all duration-500 ease-in-out fontshad 
            font-semibold 
          "
          >
            <Link to="/gallery">Galería de trabajos</Link>
          </li>
          <li
            className="text-primary hover:text-secondaryLight hover:scale-105 transform transition-all duration-500 ease-in-out fontshad 
            font-semibold 
          "
          >
            <Link to="/budget">Presupuesto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
