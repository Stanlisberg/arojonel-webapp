import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [navIcon, setNavIcon] = useState(true);
  const activeLink =
    "border-b border-[#F9BF29] text-white opacity-100 px-3 mx-2";
  const link =
    "opacity-60 px-3 text-white hover:text-white hover:border-b hover:border-[#F9BF29] hover:opacity-100  mx-2";

  return (
    <nav className="bg-[#3B5D50] w-full fixed top-0 z-10 ">
      <div className="max-w-[1140px] m-auto flex justify-between items-center px-4 sm:px-5 py-3 ">
        <div className="flex justify-between items-center">
          <div className="text-[25px] sm:text-[26px] text-white font-bold font-mono">
            Arojonel
          </div>
          <ul className="hidden md:flex text-[15px] ml-20 cursor-pointer m-auto">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeLink : link)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeLink : link)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeLink : link)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) => (isActive ? activeLink : link)}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? activeLink : link)}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[200px] hidden sm:flex relative border border-white mr-[40px] rounded-[15px] py-[2px] text-zinc-950 text-opacity-25 text-[13px]">
            <FiSearch
              size={17}
              color="white"
              className="absolute left-[10px] top-[8px]"
            />
            <input
              type="text"
              className="h-7 w-[150px] ml-[30px] bg-[#3B5D50] text-[11px] outline-none pl-2 rounded-[10px] placeholder:text-[13px] placeholder:text-[white] text-white opacity-70 font-medium block sm:text-[12px]"
              placeholder="Search our store..."
            />
          </div>

          <Link to="/cart">
            <div className="relative pt-2 sm:pt-0 mr-1 sm:mr-5 p-1 cursor-pointer">
              <AiOutlineShoppingCart
                size={30}
                // className={
                //   pathname.startsWith("/cart")
                //     ? "text-black p-1 opacity-60 bg-[white] border rounded-[5px]"
                //     : "text-[white] hover:text-black p-1 hover:opacity-60 hover:bg-[white] hover:border hover:rounded-[5px]"
                // }
              />
              <div className="top-[3px] right-[8px] absolute text-[5px] border-green-900 border text-white bg-green-900 rounded-[50%]">
                2
              </div>
            </div>
          </Link>
          <div className="pt-1 md:hidden ml-3 block cursor-pointer z-10">
            {navIcon === true ? (
              <GiHamburgerMenu
                size="27"
                color="#fff"
                onClick={() => setNavIcon(!navIcon)}
              />
            ) : (
              <FaTimes
                size="27"
                color="#fff"
                onClick={() => setNavIcon(!navIcon)}
              />
            )}
          </div>
          <div
            className={
              navIcon === false
                ? " fixed overflow-y-hidden md:hidden flex flex-col ease-in duration-700 top-[61px] left-0 w-full h-full px-4 py-7 bg-[#fff] z-10 "
                : "  fixed top-40 h-full left-[-100%] ease-in duration-700"
            }
          >
            <div className="w-full p-4">
              {/* {navLinks.map((link, index) => {
              
                return (
                  <Link>
                    <li
                      className={
                        isActive
                          ? "text-[indigo] border-b border-[indigo] py-6 cursor-pointer list-none"
                          : "border-b border-[black] py-6 cursor-pointer text-[black] list-none"
                      }
                      onClick={() => setNavIcon(!navIcon)}
                    >
                      {link.name}
                    </li>
                  </Link>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
