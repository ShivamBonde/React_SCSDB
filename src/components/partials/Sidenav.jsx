import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Trending from "../Trending";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 px-10 py-5">
      <h1 className="text-2xl text-white font-semibold mt-2">
        <i className="ri-tv-fill text-[#6556CD] mr-2 "></i>
        <span>SCSDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-[6px]">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-movie-2-fill"></i>Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-tv-2-fill"></i>TV shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-[6px]">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-information-2-fill"></i>About SCSDB
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4">
          <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidenav;
