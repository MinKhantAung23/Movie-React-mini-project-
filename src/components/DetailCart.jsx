import React from "react";
import { Link } from "react-router-dom";

const DetailCart = ({ detailMovie }) => {
  return (
    <section className="my-2">
      {detailMovie && (
        <div>
          <img
            className="w-full h-56 object-cover object-top opacity-40"
            src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`}
            alt={detailMovie.title}
          />

          <div className=" p-4 flex justify-center items-start">
            <img
              className="w-52 rounded-md"
              src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
              alt={detailMovie.title}
            />
            <div className="ms-4">
              <h1 className="text-3xl font-bold mb-1">
                {detailMovie.original_title}
              </h1>
              <h3 className="text-sm mb-2">
                {detailMovie.release_date} . {detailMovie.runtime}min ({" "}
                {detailMovie.status} )
              </h3>

              {detailMovie.genres?.map((gen) => {
                return (
                  <span
                    key={gen.id}
                    className=" bg-blue-400 px-1 py-1 rounded-lg text-center me-2 text-sm"
                  >
                    {gen.name}
                  </span>
                );
              })}
              <h3 className="text-sm mt-2 font-semibold">
                Rating : {detailMovie.vote_average}
              </h3>
              <h3 className="text-base text-gray-700 mt-2 mb-1">
                {detailMovie.tagline}
              </h3>

              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="text-sm mb-4">{detailMovie.overview}</p>
              <Link to={detailMovie.homepage} className="btn-secondary">
                Watch Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailCart;
