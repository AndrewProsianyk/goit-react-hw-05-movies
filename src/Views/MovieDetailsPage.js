import { useState, useEffect, Suspense, lazy } from 'react';
import {  useParams, useHistory, useLocation, NavLink, Switch, Route } from 'react-router-dom';
import { fetchMoviesId, IMG } from "../movies-api";

const Cast = lazy(() => import('./Cast') /* webpackChunkName: "Cast" */);
const Reviews = lazy(() => import('./Reviews') /* webpackChunkName: "Reviews" */);

function MovieDetailsPage() {
    const history = useHistory();
    const location = useLocation();

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);


    let locationValue = location.state;

    if (location.state) {
        locationValue = location.state.from;
    }

    useEffect(() => {
        fetchMoviesId(movieId).then(movie => {
            setMovie(movie)
        })
    }, [movieId]);
    

    const goBackFn = () => {
        if (!location.state) {
            history.push('/');
            return;
        }
        history.push(`${location.state.from.pathname}${location.state.from.search}`)
    };

    return (
        <>
            {movie &&
            <div>
                <button onClick={goBackFn}>Go back</button>
                <div>
                    <img src={IMG + movie.poster_path} alt={movie.title} />
                    <div>
                        <h2>{movie.title}{movie.name}</h2>
                        <span>User Score: {movie.vote_average}</span>
                        <span>Overview: {movie.overview}</span>
                        <span>Genres: {movie.genres.map(genre => genre.name).join(' ')}</span>
                    </div>
                </div>
                <nav>
                    <NavLink
                        to={{
                            pathname: `/movies/${movieId}/cast`,
                            state: { from: locationValue }
                        }}>
                        Cast
                    </NavLink>
                    <NavLink
                        to={{
                            pathname: `/movies/${movieId}/reviews`,
                            state: { from: locationValue }
                        }}>
                        Reviews
                    </NavLink>
                    
                    <Suspense fallback={<h2>LOADING...</h2>}>
                        <Switch>
                            <Route exact path={`/movies/${movieId}/cast`}>
                                <Cast movieId={movieId} />
                            </Route>

                            <Route path={`/movies/${movieId}/reviews`}>
                                <Reviews movieId={movieId} />
                            </Route>
                        </Switch>
                    </Suspense>
                </nav>
            </div>
            }
        </>
    )
}

export default MovieDetailsPage;