import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimage from "../../../public/noimage.jpg";

function HorizontalCards({ data, func }) {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.length > 0 ? (
        data.map((d, i) => {
          return (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="min-w-[15%] h-[40vh] bg-zinc-900 mr-5 mb-5"
            >
              <img
                className="w-full h-[52%] object-cover"
                src={
                  d.backdrop_path || d.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.profile_path
                      }`
                    : noimage
                }
                alt=""
              />
              <div className="text-white p-3 h-[48%] overflow-y-auto">
                <h1 className="text-xl font-semibold leading-6 ">
                  {d.name || d.title || d.original_name || d.original_title}
                </h1>
                <p className="text-sm text-zinc-400">
                  {d.overview.slice(0, 50)}...
                  <span className="text-zinc-100">more</span>
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <h1 className="text-3xl text-white font-black text-center mt-5">
          Nothing to show
        </h1>
      )}
    </div>
  );
}
export default HorizontalCards;
