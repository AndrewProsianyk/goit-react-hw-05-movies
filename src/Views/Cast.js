import {useState, useEffect} from 'react';
import { fetchMovieCast, IMG } from '../movies-api';
import styles from './Cast.module.css'

function Cast({ movieId }) {
    const [credits, setCredits] = useState([])
    useEffect(() => {
        fetchMovieCast(movieId).then(r=>setCredits(r))
    }, [movieId])

    return (
        <ul className={styles.castList}>
            {credits.cast && credits.cast.map(actor => (
                <li
                    className={styles.actorCard}
                    key={actor.id}>
                    <img src={IMG + actor.profile_path} alt={actor.name} />
                    <p className={styles.actorName}>{actor.name}</p>
                </li>
            ))}
        </ul>
    )
}

export default Cast