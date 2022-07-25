import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

import type { FilmsProps } from '../../types/film-info';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

const App = ( { promoFilm, films, favoriteFilms }: FilmsProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path = { AppRoute.Main }
        element = {
          <MainScreen
            promoFilm = { promoFilm }
            films = { films }
            favoriteFilms = { favoriteFilms }
          />
        }
      />
      <Route
        path = { AppRoute.SignIn }
        element = { <SignInScreen/> }
      />
      <Route
        path = { AppRoute.MyList }
        element = {
          <PrivateRoute
            authorizationStatus = { AuthorizationStatus.Auth }
          >
            <MyListScreen
              favoriteFilms = { favoriteFilms }
            />
          </PrivateRoute>
        }
      />
      <Route
        path = { AppRoute.Film }
        element = {
          <MoviePageScreen
            films = { films }
            favoriteFilms = { favoriteFilms }
          />
        }
      />
      <Route
        path = { AppRoute.AddReview }
        element = {
          <PrivateRoute
            authorizationStatus = { AuthorizationStatus.Auth }
          >
            <AddReviewScreen
              films = { films }
            />
          </PrivateRoute>
        }
      />
      <Route
        path = { AppRoute.Player }
        element = {
          <PlayerScreen
            films = { films }
          />
        }
      />
      <Route
        path = "*"
        element = { <NotFoundScreen/> }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
