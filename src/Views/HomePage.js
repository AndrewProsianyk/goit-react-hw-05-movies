import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../movies-api";
import MoviesList from "../Components/MoviesList/MoviesList";
import styles from './HomePage.module.css'
function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(r => setMovies(r.results))
    }, [])

    return (
        <>
            <h1 className={styles.title}>Trending today</h1>
            <MoviesList movies={movies}></MoviesList>
        </>
    )
}

export default HomePage;