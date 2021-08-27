import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import './App.module.css'

const HomePage = lazy(() => import('./Views/HomePage' /* webpackChunkName: "HomePage"*/))
const MovieDetailsPage = lazy(()=>import('./Views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/))
const MoviesPage = lazy(()=>import('./Views/MoviesPage' /* webpackChunkName: "MoviesPage"*/))
const NotFoundView = lazy(()=>import('./Views/NotFoundView' /* webpackChunkName: "NotFoundView"*/))

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
