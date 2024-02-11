import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const searchMovie = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  };
  return (
    <nav className="flex justify-between items-center bg-blue-900 text-white p-3 shadow">
      <div>
        <Link to="/" className="flex items-center space-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <h1 className="text-2xl font-bold ">MK Movie</h1>
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <NavLink
          to="/now_playing"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-xl font-medium"
              : "text-white text-xl font-medium"
          }
        >
          Now Playing
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-xl font-medium"
              : "text-white text-xl font-medium"
          }
        >
          Popular
        </NavLink>
        <NavLink
          to="/upcoming"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-xl font-medium"
              : "text-white text-xl font-medium"
          }
        >
          Upcoming
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-xl font-medium"
              : "text-white text-xl font-medium"
          }
        >
          Trending
        </NavLink>
      </div>
      <form action="" className="flex items-center" onSubmit={searchMovie}>
        <input
          type="text"
          className="rounded-s-md text-black px-2"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button
          type="submit"
          className="w-6 h-6 border bg-cyan-700 p-1 text-white rounded-e-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className=" "
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </nav>
  );
};

export default Nav;
