import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartContainer = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    // return console.log(data.results);
  };
  return (
    <section className="my-2">
      <h1 className="text-2xl font-bold text-slate-500 text-center my-3">
        {title}
      </h1>
      <div className="flex gap-3 items-center justify-center flex-wrap p-4">
        {movies.map((movie) => {
          return (
            <div
              className="w-52 h-[22rem] border rounded-md shadow-lg relative"
              key={movie.id}
            >
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  className="w-60 h-60 object-cover rounded-t-md"
                  alt={movie.title}
                />
              </Link>
              <div className="flex flex-col items-start p-2">
                <Link to={`/details/${movie.id}`}>
                  <h1 className="font-semibold my-2 hover:text-blue-500">
                    {movie.title}
                  </h1>
                </Link>
                <h2 className="font-light text-sm">{movie.release_date}</h2>
                <p className="border absolute bottom-24 left-2 rounded-full p-1 bg-black text-white">
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CartContainer;
