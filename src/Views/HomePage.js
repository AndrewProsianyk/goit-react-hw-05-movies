import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../movies-api";
import MoviesList from "../Components/MoviesList/MoviesList";

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(r => setMovies(r.results))
    }, [])

    return (
        <>
            <span>Trending today</span>
            <MoviesList movies={movies}></MoviesList>
        </>
    )
}

export default HomePage;