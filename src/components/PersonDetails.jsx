import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  const [category, setcategory] = useState("movie");
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  console.log(info);

  return info ? (
    <div className="px-[10%] h-[170vh] w-screen bg-[#1F1E24]">
      <nav className="h-[8vh] w-full text-zinc-100 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex ">
        {/* part-2 */}

        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[39vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
            alt=""
          />

          <hr className="w-[92%] mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <div className="text-2xl text-white flex gap-x-9">
            <a
              target="blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="blank"
              href={`https://www.twitter.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          <h1 className="text-2xl text-zinc-400 font-semibold mt-5 mb-4">
            Person Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className=" text-zinc-400 ">
            {info.details.known_for_department}
          </h1>

          <h1 className="text-lg text-zinc-400  font-semibold mt-2">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.details.gender === 2 ? "male" : "female"}
          </h1>

          <h1 className="text-lg text-zinc-400  font-semibold mt-2">
            Birthday
          </h1>
          <h1 className=" text-zinc-400 ">{info.details.birthday}</h1>

          <h1 className="text-lg text-zinc-400  font-semibold mt-2">
            Deathday
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.details.deathday ? info.details.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400  font-semibold mt-2">
            Place of Birth
          </h1>
          <h1 className=" text-zinc-400 ">{info.details.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400  font-semibold mt-2">
            Also Known As
          </h1>
          <h1 className=" text-zinc-400 ">
            {info.details.also_known_as.join(", ")}
          </h1>
        </div>

        {/* part3 */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-5xl text-zinc-400 font-black">
            {info.details.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold mt-5">
            Biography
          </h1>
          <p className="text-zinc-400 mt-3">{info.details.biography}</p>

          <h1 className="text-lg text-zinc-400 font-semibold mt-5">Know for</h1>
          <HorizontalCards data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-semibold mt-5">Acting</h1>
            <Dropdown
              title={"Category"}
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <div className="w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-2xl shadow-white mt-5"></div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
