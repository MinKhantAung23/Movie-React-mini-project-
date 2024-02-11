import React from "react";
import CartContainer from "../components/CartContainer";

const Trending = () => {
  return (
    <>
      <CartContainer
        title={"Trending Movies"}
        url={
          "https://api.themoviedb.org/3/trending/movie/day?api_key=b58660109366dac6455a66ea5a290763"
        }
      />
    </>
  );
};

export default Trending;
