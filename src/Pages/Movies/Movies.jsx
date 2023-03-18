import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'settings/getMovies';

import { useSearchParams } from 'react-router-dom';

import { ContainerMovies, List, Item } from './Movies.styled';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchMovies, setSearchMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    getSearchMovies(inputValue).then(data => setSearchMovies(data));

    if (inputValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: inputValue });
  };

  const updateQueryString = e => {
    const queryValue = e.target.value;

    setInputValue(queryValue);
  };

  useEffect(() => {
    getSearchMovies(query).then(data => setSearchMovies(data));
  }, [query]);

  return (
    <ContainerMovies>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={updateQueryString}
        />
        <button type="submit">Пошук</button>
      </form>
      <List>
        {searchMovies &&
          searchMovies.results.map(movie => {
            // console.log(movie);
            return (
              <Item key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                      width={200}
                      height={300}
                    />
                  ) : (
                    <img
                      src={`http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png`}
                      alt={movie.title}
                      width={200}
                      height={300}
                    />
                  )}
                  <p>{movie.title}</p>
                </Link>
              </Item>
            );
          })}
      </List>
    </ContainerMovies>
  );
};

export default Movies;
