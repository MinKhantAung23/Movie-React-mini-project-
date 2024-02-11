import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCart from "../components/DetailCart";

const Details = () => {
  const [detailMovie, setDetailMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getSingleMovie();
  }, [id]);
  const getSingleMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b58660109366dac6455a66ea5a290763`
    );
    const data = await response.json();
    setDetailMovie(data);
    console.log(data);
  };
  return <DetailCart detailMovie={detailMovie} />;
};

export default Details;
