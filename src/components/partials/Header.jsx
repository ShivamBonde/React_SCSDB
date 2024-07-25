import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),
        url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "top-center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start pl-[10%] pb-[3%]"
    >
      <h1 className="w-[50%] text-5xl font-black text-white ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[40%] mt-3 text-white ">
        {data.overview.slice(0, 150)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white flex ">
        <i className="ri-megaphone-fill text-yellow-500"></i>
        {data.first_air_date || data.release_date}
        <i className="ri-album-fill text-yellow-500"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="p-4 rounded text-white mt-5 bg-[#6556cd]"
      >
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
