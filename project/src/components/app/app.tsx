import MainScreen from '../../pages/main-screen/main-screen';
import type { FilmProps } from '../../types/types';

const App = ( { promoFilm } : { promoFilm: FilmProps } ) => <MainScreen promoFilm = { promoFilm } />;

export default App;
