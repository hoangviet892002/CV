import React from "react";
import Logo from "../assets/logo.png";
import Selector from "../redux/selector";
import { useDispatch } from "react-redux";
import { setSelectedLanguage } from "../redux/slice/languagesSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { languageSelector } = Selector();
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
              dispatch(
                setSelectedLanguage(
                  languageSelector.selectedLanguage === "en" ? "vi" : "en"
                )
              );
            }}
          >
            {languageSelector.selectedLanguage}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
