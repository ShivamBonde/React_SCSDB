import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
function HorizontalCards({ data, func }) {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.map((d, i) => {
        return (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] bg-zinc-900 mr-5 mb-5"
          >
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="text-white p-3 h-[45%]">
              <h1 className="text-xl font-semibold ">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-sm">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-400">more</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default HorizontalCards;
