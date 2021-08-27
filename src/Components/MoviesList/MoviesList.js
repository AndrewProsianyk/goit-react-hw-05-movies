import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {IMG} from '../../movies-api'
import styles from './MoviesList.module.css'

const MoviesList = ({ movies }) => {
    const location = useLocation()
    return (
        <ul className={styles.moviesList}>
            {movies.map(movie => (
                <li className={styles.movieCard} key={movie.id}>
                    <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: location }
                    }}>
                    <img src={IMG+movie.poster_path} alt={movie.title} />
                    <span className={styles.movieName}>{movie.title}{movie.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default MoviesList;