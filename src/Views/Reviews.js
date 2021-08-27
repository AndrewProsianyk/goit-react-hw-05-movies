import {useState, useEffect} from 'react';
import { fetchMovieReviews } from '../movies-api';

function Reviews({ movieId }) {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetchMovieReviews(movieId).then(r=>setReviews(r.results))
    }, [movieId])
    // console.log(reviews)
    return (
        <ul>
            {reviews.map(review => (
                <li key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    )
}
export default Reviews;