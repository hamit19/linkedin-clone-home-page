import React, { useEffect, useState } from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import ProfileAvatar from "../profileAvatar/ProfileAvatar";
import NavigationOptions from "../navigationOptions/NavigationOptions";

const Header = () => {
  const [windowSize, setWindowSize] = useState();

  const handleWindowResize = (e) => {
    setWindowSize(e.target.innerWidth);
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        {windowSize < 768 && <ProfileAvatar />}

        {/* left navbar */}
        <div className="left__navbar">
          {/* linkedin logo */}
          <LinkedInIcon style={{ color: "#0A66C2", fontSize: "2.5rem" }} />

          {/* searchBox */}
          <div className="search-box">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        {/* right navbar */}
        <NavigationOptions />
        {windowSize >= 768 && <ProfileAvatar />}
      </nav>
    </header>
  );
};

export default Header;
