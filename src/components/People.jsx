import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {

  document.title = "SCSDB | People";
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPerson((prevstate) => [...prevstate, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setPage(1);
      setPerson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full  flex items-center justify-between">
        <h1 className="w-[40vh] text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          People 
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}
export default People;
