import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");

  console.log(query);
  return (
    <div className="relative flex items-center  w-full h-[10vh] ">
      <i class="ml-[21%] text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[45%] text-zinc-200 ml-10  p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          class="text-zinc-400 text-3xl ri-close-line hover:cursor-pointer "
        ></i>
      )}

      <div className="ml-[21%] absolute rounded w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
        <Link className="hover:text-black hover:bg-zinc-300 duration-200 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>hello evvery one</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
