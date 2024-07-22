import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

function Trending() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  return trending ? (
    <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full  flex items-center justify-between">
        <h1 className=" text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <Dropdown
            title={"Category"}
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title={"Duration"}
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <Cards data={trending} title={category} />
    </div>
  ) : (
    <Loading />
  );
}
export default Trending;
