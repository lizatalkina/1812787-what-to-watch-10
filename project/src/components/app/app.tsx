import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';

import type { FilmProps } from '../../types/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

const App = ( { promoFilm } : { promoFilm: FilmProps } ) => (
  <BrowserRouter>
    <Routes>
      <Route
        path = { AppRoute.Main }
        element = { <MainScreen promoFilm = { promoFilm } /> }
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
            <MyListScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path = { AppRoute.Film }
        element = { <MoviePageScreen/> }
      />
      <Route
        path = { AppRoute.AddReview }
        element = {
          <PrivateRoute
            authorizationStatus = { AuthorizationStatus.Auth }
          >
            <AddReviewScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path = { AppRoute.Player }
        element = { <PlayerScreen/> }
      />
      <Route
        path = "*"
        element = { <NotFoundScreen/> }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
