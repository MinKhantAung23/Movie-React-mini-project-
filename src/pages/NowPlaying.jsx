import React from "react";
import CartContainer from "../components/CartContainer";

const NowPlaying = () => {
  return (
    <>
      <CartContainer
        title={"Now Playing Movies"}
        url={
          "https://api.themoviedb.org/3/movie/now_playing?api_key=b58660109366dac6455a66ea5a290763"
        }
      />
    </>
  );
};

export default NowPlaying;
