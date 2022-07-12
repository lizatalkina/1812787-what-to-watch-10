import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import type { FilmProps } from './types/types';

const MainMovie = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilm: FilmProps = {
  title: MainMovie.title,
  genre: MainMovie.genre,
  year: MainMovie.year,
};

root.render(
  <React.StrictMode>
    <App
      promoFilm = { promoFilm }
    />
  </React.StrictMode>,
);
