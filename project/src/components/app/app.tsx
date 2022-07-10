import MainScreen from '../../pages/main-screen/main-screen';

type FilmProps = {
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
}

const App = (props: FilmProps) => <MainScreen {...props} />;

export default App;
