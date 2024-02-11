import React from "react";
import CartContainer from "../components/CartContainer";

const Popular = () => {
  return (
    <>
      <CartContainer
        title={"Popular Movies"}
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=b58660109366dac6455a66ea5a290763"
        }
      />
    </>
  );
};

export default Popular;
