import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[8%] bg-[#1F1E24] justify-between">
      {data.map((c, i) => (
        <Link className="mr-[5%] mt-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path
            }`}
            alt=""
          />
          <h1 className="w-[27vh] text-xl text-zinc-200 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
