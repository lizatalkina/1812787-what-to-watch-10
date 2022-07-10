import MainScreen from '../../pages/main-screen/main-screen';

type AppMainFilmProps = {
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
}

function App({filmTitle, filmGenre, filmYear}: AppMainFilmProps): JSX.Element {
  return <MainScreen filmTitle={filmTitle} filmGenre={filmGenre} filmYear={filmYear} />;
}

export default App;
