import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Feedback UI</h1>
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
