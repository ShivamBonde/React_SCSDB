import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import TVDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Moviedetails from "./components/MovieDetails";

const App = () => {
  return (
    <div className="w-screen h-screen flex bg-[#1f1e24]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TVDetails />} />
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
