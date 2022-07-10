import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const MainMovie = {
  movieTitle: 'The Grand Budapest Hotel',
  movieGenre: 'Drama',
  movieYear: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmTitle = {MainMovie.movieTitle}
      filmGenre = {MainMovie.movieGenre}
      filmYear = {MainMovie.movieYear}
    />
  </React.StrictMode>,
);
