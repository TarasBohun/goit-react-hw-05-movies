import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'settings/getMovies';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
