import React from "react";
import { Link } from "react-router-dom";

const HeaderCarts = ({ movie }) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        className="w-full h-full object-cover"
        alt={movie.title}
      />

      <div className="bg-opacity-50 bg-black w-full h-full top-0 left-0 absolute z-10"></div>
      <div className="text-box">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-lg font-medium mb-4">{movie.overview}</p>
        <Link to={`/details/${movie.id}`} className="btn">
          Detail
        </Link>
      </div>
    </div>
  );
};

export default HeaderCarts;
