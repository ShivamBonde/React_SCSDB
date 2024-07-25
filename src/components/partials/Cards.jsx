import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/noimage.jpg";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[8%] bg-[#1F1E24] justify-between">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative mr-[5%] mt-[5%]"
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="w-[27vh] text-xl text-zinc-200 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold text-white w-[6vh] h-[6vh] flex justify-center items-center bg-yellow-400">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
