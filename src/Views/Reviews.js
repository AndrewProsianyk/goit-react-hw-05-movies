import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../movies-api';
import styles from './Reviews.module.css'

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId).then(r => setReviews(r.results));
  }, [movieId]);
  // console.log(reviews)
  return (
    <ul>
      {reviews.map(review => (
        <li
            className={styles.reviewItem}
            key={review.id}>
          <p className={styles.name}>{review.author}</p>
          <p className={styles.review}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
export default Reviews;
