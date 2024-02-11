import React from "react";
import CartContainer from "../components/CartContainer";

const Upcoming = () => {
  return (
    <>
      <CartContainer
        title={"Upcoming Movies"}
        url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=b58660109366dac6455a66ea5a290763"
        }
      />
    </>
  );
};

export default Upcoming;
