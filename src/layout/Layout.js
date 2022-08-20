import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import NavigationOptions from "../components/navigationOptions/NavigationOptions";

import "./Layout.css";

const Layout = ({ children }) => {
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
    <div className="layout">
      {/* header */}
      <Header />

      <main className="app__body">{children}</main>
      {windowSize < 768 && <NavigationOptions />}
    </div>
  );
};

export default Layout;
