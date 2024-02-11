import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Search from "./pages/Search";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/now_playing" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search/:title" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
