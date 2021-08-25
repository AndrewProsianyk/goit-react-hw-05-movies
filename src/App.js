import API from './movies-api';
import Navigation from './Components/Navigation/Navigation';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />

      <Route path="/">
        <div>MAIN</div>
      </Route>
      <Route path="/movies">
        <div>MOVIES</div>
      </Route>
    </div>
  );
}

export default App;
