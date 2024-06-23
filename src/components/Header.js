import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <a>
            <img src={Logo} alt="logo" className="w-20" />
          </a>
          <button
            className="btn btn-sm"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1zoknp51kLKF3GAGbylRfR8npQ6gD0G-4/view?usp=sharing"
              );
            }}
          >
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
