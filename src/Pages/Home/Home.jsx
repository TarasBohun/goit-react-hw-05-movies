import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getTrendigMovies } from 'settings/getMovies';

import { Container, List, Item, Title, MovieTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrendigMovies().then(data => setMovies(data));
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                />
                <MovieTitle>{movie.title}</MovieTitle>
              </Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
