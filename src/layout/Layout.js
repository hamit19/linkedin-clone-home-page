import React from "react";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* header */}

      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
