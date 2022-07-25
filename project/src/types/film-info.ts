export type FilmsProps = {
  promoFilm: Film;
  films: Film[];
  favoriteFilms: Film[];
};

export type MovieListProps = {
  films: Film[];
};

export type MyListProps = {
  favoriteFilms: Film[];
};

export type FilmProps = {
  film: Film;

}
export type MoviePageProps = {
  films: Film[];
  favoriteFilms: Film[];
}

export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type User = {
  id: number;
  name: string;
};

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};
