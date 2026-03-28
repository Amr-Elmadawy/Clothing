import React from "react";
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaHome } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = ({
  HandleScroll,
  setSearchTerm,
  isScroll,
  HandlePanel,
  totalItem,
  wishlist,
}) => {
  return (
    <header
      className={`fixed top-0 right-0 left-0 bg-white z-30  ${isScroll ? "shadow-lg" : ""}`}
    >
      <nav className=" md:h-[15vh] h-[13vh] max-w-325 mx-auto flex justify-between items-center md:px-0 px-5">
        <a href="" className="w-15 h-15 rounded-full bg-zinc-100 p-2">
          <img src={Logo} alt="Logo" className="h-full w-full" />
        </a>
        <div className="flex  items-center justify-between gap-5">
          <div className=" flex items-center  border-2 border-blue-600 rounded-full md:w-auto w-50">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search ..."
              autoComplete="off"
              className="  focus:outline-none  md:w-auto w-40 p-2 "
              onFocus={HandleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="md:text-xl text-white md:w-8 w-7 md:h-8 h-7 bg-blue-600 mx-1  rounded-full  flex items-center justify-center">
              <IoSearch />
            </button>
          </div>
          <div className="md:flex gap-5 hidden">
            <button
              className="text-[1.7rem] relative cursor-pointer"
              onClick={() => {
                HandlePanel("wishlist");
              }}
            >
              <FaHeart />
              {wishlist.length > 0 && (
                <span className="flex justify-center items-center bg-red-600 rounded-full w-6 h-6 absolute top-4 right-3  text-white text-[14px]  border border-white">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              className={`text-[1.7rem] relative cursor-pointer `}
              onClick={() => {
                HandlePanel("cart");
              }}
            >
              <HiMiniShoppingBag />
              {totalItem > 0 && (
                <span className="flex justify-center items-center bg-red-600 rounded-full w-6 h-6 absolute top-4 right-3  text-white text-[14px]  border border-white">
                  {totalItem}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <nav className="md:hidden  flex justify-between items-center fixed z-100 bg-white bottom-0 right-0 left-0 md:h-[15vh] h-[13vh] px-5 border-t border-zinc-300 gap-5 ">
        <div className="flex-1 flex justify-center items-center flex-col">
          <button className="text-[1.7rem] relative cursor-pointer flex-1 flex justify-center items-center text-blue-600">
            <a href="#" >
              <FaHome />
            </a>
          </button>
          <span className="text-blue-600 font-semibold">Home</span>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col">
          <button
            className={`text-[1.7rem] relative cursor-pointer flex-1 flex justify-center items-center text-zinc-800`}
            onClick={() => {
              HandlePanel("cart");
            }}
          >
            <HiMiniShoppingBag />
            {totalItem > 0 && (
              <span className="flex justify-center items-center bg-red-600 rounded-full w-6 h-6 absolute bottom-2 left-4  text-white text-[14px]  border border-white">
                {totalItem}
              </span>
            )}
          </button>
          <span className="text-zinc-800 font-semibold">Cart</span>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col">
          <button
            className="text-[1.7rem] relative cursor-pointer flex-1 flex justify-center items-center text-zinc-800"
            onClick={() => {
              HandlePanel("wishlist");
            }}
          >
            <FaHeart />
            {wishlist.length > 0 && (
              <span className="flex justify-center items-center bg-red-600 rounded-full w-6 h-6 absolute bottom-2 left-4  text-white text-[14px]  border border-white">
                {wishlist.length}
              </span>
            )}
          </button>
          <span className="text-zinc-800 font-semibold">Wishlist</span>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col">
          <button className="text-[1.7rem] relative cursor-pointer  flex justify-center items-center text-zinc-800">
            <BsPersonCircle />
          </button>
          <span className="text-zinc-800 font-semibold">profile</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
