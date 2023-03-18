import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { getMovieDetails } from 'settings/getMovies';

import {
  Container,
  ContainerMovie,
  Description,
  GenresList,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinklocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  return (
    <Container>
      <StyledLink to={backLinklocationRef.current}>Go back</StyledLink>

      {movie.length !== 0 && (
        <ContainerMovie>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width={300}
          />
          <Description>
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {Math.round((movie.vote_average * 100) / 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <GenresList>
              {movie.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </GenresList>
          </Description>
        </ContainerMovie>
      )}
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
