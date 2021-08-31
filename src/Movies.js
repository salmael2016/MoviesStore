import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie, index) => {
        const {
          Title: title,
          Year: year,
          imdbID: id,
          Type: categorie,
          Poster: poster,
        } = movie;
        return (
          <Link to={`/movies/${id}`} className="movie" key={id}>
            <article>
              {poster === "N/A" ? (
                <img src={url} alt={title} />
              ) : (
                <img src={poster} alt={title} />
              )}
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
