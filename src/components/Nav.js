import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboard, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav>
      <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            <Link
              to="home"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="about"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <BiUser />
            </Link>

            <Link
              to="work"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <BsBriefcase />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
