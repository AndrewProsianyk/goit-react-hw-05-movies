import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MovieSearch from '../Components/MovieSearch/MovieSearch'
import MoviesList from '../Components/MoviesList/MoviesList';
import {fetchMovieSearch} from '../movies-api'

function MoviesPage() {
    const location = useLocation();
    const history = useHistory();
    const [query,setQuery]=useState(new URLSearchParams(location.search).get('query') ?? '')
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        if (!query) {
            return
        }
        fetchMovieSearch(query).then(r => {
            setMovies(r.results)
        }, [query])
        
        
    })
    const onClick = r => {
        setMovies([])
        setQuery(r)
        history.push({
            ...location,
            search: `query=${r}`
        });
    }

    return (
        <>
            <MovieSearch onSubmit={onClick}/>
            {movies && <MoviesList movies={ movies}/>}
        </>
    )
}
export default MoviesPage;