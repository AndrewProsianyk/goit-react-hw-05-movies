import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';


const HomePage = lazy(() => import('./Views/HomePage'))
const MovieDetailsPage = lazy(()=>import('./Views/MovieDetailsPage'))
const MoviesPage = lazy(()=>import('./Views/MoviesPage'))
const NotFoundView = lazy(()=>import('./Views/NotFoundView'))

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>LOADING</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
