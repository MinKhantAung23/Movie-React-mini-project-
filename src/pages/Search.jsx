import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContainer from "../components/CartContainer";

const Search = () => {
  const { title } = useParams();
  // const [search, setSearch] = useState([]);
  // useEffect(() => {
  //   getSearchMovie();
  // }, [title]);
  // const getSearchMovie = async () => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=b58660109366dac6455a66ea5a290763&query=${title}&include_adult=false&language=en-US&page=1`
  //   );
  //   const data = await response.json();
  //   setSearch(data.results);
  //   console.log(data.results);
  // };
  return (
    <>
      <CartContainer
        title={title}
        url={`https://api.themoviedb.org/3/search/movie?api_key=b58660109366dac6455a66ea5a290763&query=${title}&include_adult=false&language=en-US&page=1`}
      />
    </>
  );
};

export default Search;
