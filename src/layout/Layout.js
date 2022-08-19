import React from "react";
import Header from "../components/header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* header */}
      <Header />

      <main className="app__body">{children}</main>
    </div>
  );
};

export default Layout;
