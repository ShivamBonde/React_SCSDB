import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";

function Moviedetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),
      url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "top-center",
        backgroundSize: "cover",
      }}
      className="w-screen h-[155vh] px-[10%] "
    >
      {/* part-1 */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="blank" href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* part2 */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[55vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%]  text-white">
          <h1 className="text-5xl font-black ">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            <small className="text-2xl font-bold text-zinc-200">
              ({info.details.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex  text-white items-center gap-x-5">
            <span className="rounded-full text-xl font-semibold text-white w-[6vh] h-[6vh] flex justify-center items-center bg-yellow-500">
              {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="font-semibold text-2xl w-[60px] leading-none ">
              User Score
            </h1>
            <h1 className="">{info.details.release_date}</h1>
            <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.details.runtime}min</h1>
          </div>
          <h1 className="text-xl font-semibold italic">
            {info.details.tagline}
          </h1>
          <h1 className="text-2xl my-3">Overview</h1>
          <p>{info.details.overview}</p>
          <h1 className="text-2xl my-3">Movie Translated</h1>
          <p className="mb-5">{info.translations.join(", ")}</p>
          <Link
            to={`${pathname}/trailer`}
            className="px-6 py-3 bg-[#6556CD] rounded-lg "
          >
            <i className="ri-play-fill text-xl "></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* part3 */}
      <div className="w-[80%] flex flex-col gap-5 mt-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-4 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-7 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-7 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part-4  */}
      <hr className="mt-8 mb-3 border-none h-[2px] bg-zinc-500"/>
      <h1 className="text-2xl  font-bold text-white">Recommendations and Similar stuff</h1>
      <HorizontalCards
        data={info.recommendations.length>0 ? info.recommendations : info.similar}
      />
    </div>
  ) : (
    <Loading />
  );
}

export default Moviedetails;
