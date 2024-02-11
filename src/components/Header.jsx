import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCarts from "./HeaderCarts";

const Header = () => {
  const [topRated, SetTopRated] = useState([]);
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b58660109366dac6455a66ea5a290763"
    );
    const data = await response.json();
    SetTopRated(data.results);
    // return console.log(data.results);
  };
  return (
    <section className="w-full h-screen">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 3500,
        }}
      >
        {topRated.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <HeaderCarts movie={movie} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Header;
