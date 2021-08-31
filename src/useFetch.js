import React, { useState, useContext, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const moviesResults = data.Search;
      const apiResponse = data.Response;

      if (apiResponse === "False") {
        setError({ show: true, msg: data.Error });
      } else {
        setError({ show: false, msg: "" });

        setData(moviesResults || data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
