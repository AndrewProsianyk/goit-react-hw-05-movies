import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Views/HomePage';
import MovieDetailsPage from './Views/MovieDetailsPage';
import NotFoundView from './Views/NotFoundView';
import MoviesPage from './Views/MoviesPage';

// import MoviesPage from './Views/MoviesPage'

function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage/>
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
