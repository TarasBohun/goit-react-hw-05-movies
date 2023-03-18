import { useParams } from 'react-router-dom';
import { getMovieCast } from 'settings/getMovies';
import { useEffect, useState } from 'react';

const Cast = () => {
  const [cast, setCasts] = useState([]);
  // console.log(casts);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  return (
    <div>
      {cast.length !== 0 && (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.name}
                    width={200}
                  />
                ) : (
                  <img
                    src={`http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png`}
                    alt={actor.name}
                    width={200}
                  />
                )}
                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
