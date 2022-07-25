import React from 'react';
import { useState } from 'react';
import { MovieListProps } from '../../types/film-info';
import { Film } from '../../types/film-info';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({ films }: MovieListProps) => {
  // временно отключена проверка неиспользуемой переменной
  const [hoverMovie, setHovered] = useState<Film | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <article className="small-film-card catalog__films-card" key={film.id}
            onMouseEnter = { () => {
              setHovered(film);
            }}
            onMouseLeave = { () => {
              setHovered(null);
            }}
          >
            <MovieCard film={film} />
          </article>))
      }
    </div>
  );
};

export default MoviesList;
