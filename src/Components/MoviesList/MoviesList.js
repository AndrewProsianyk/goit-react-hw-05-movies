import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import {IMG} from '../../movies-api'


const MoviesList = ({ movies }) => {
    const location = useLocation()
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: location }
                    }}>
                    <img src={IMG+movie.poster_path} alt={movie.title} />
                    <span>{movie.title}{movie.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default MoviesList;