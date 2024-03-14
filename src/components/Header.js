import React from "react";
import NetflixLogo from "../Images/NetflixLogo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img alt="logo" src={NetflixLogo} className="w-48" />
    </div>
  );
};

export default Header;
