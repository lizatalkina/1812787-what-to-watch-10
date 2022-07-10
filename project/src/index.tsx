import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const MainMovie = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilm = {
  filmTitle: MainMovie.title,
  filmGenre: MainMovie.genre,
  filmYear: MainMovie.year,
};

root.render(
  <React.StrictMode>
    <App
      {...promoFilm}
    />
  </React.StrictMode>,
);
