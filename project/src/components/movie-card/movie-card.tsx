import type { FilmProps } from '../../types/film-info';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

const MovieCard = ({ film, hoverMovie }: FilmProps): JSX.Element => {
  const { id, name, previewImage } = film;
  const navigate = useNavigate();
  return (
    <>
      <div className="small-film-card__image"
        onClick={() => navigate(`${AppRoute.Film.replace(':id', `${id}`)}`)}
      >
        {(hoverMovie && hoverMovie.id === id) ?
          <VideoPlayer
            autoPlay={false}
            isMuted
            id={hoverMovie.id}
            src={hoverMovie.videoLink}
            posterImage={hoverMovie.posterImage}
            name={hoverMovie.name}
          /> : <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film.replace(':id', `${id}`)} className="small-film-card__link">{name}</Link>
      </h3>
    </>
  );
};

export default MovieCard;
