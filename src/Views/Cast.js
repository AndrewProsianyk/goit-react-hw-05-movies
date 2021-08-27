import {useState, useEffect} from 'react';
import { fetchMovieCast, IMG } from '../movies-api';

function Cast({ movieId }) {
    const [credits, setCredits] = useState([])
    useEffect(() => {
        fetchMovieCast(movieId).then(r=>setCredits(r))
    }, [movieId])

    return (
        <ul>
            {credits.cast && credits.cast.map(actor => (
                <li key={actor.id}>
                    <img src={IMG + actor.profile_path} alt={actor.name} />
                    <p>{actor.name}</p>
                </li>
            ))}
        </ul>
    )
}

export default Cast