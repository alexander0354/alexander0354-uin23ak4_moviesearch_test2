import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieProfile from './components/MovieProfile';
import './sass/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Movies</h1>
        </header>
        <main>
            <Route exact path="/" component={MovieList} />
            <Route path="/search/:query" component={MovieList} />
            <Route path="/movie/:id" component={MovieProfile} />
        </main>
        <footer>
          <span>Del nettsiden vår!</span>
          <div className="social-media">
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.twitter.com">Twitter</a>
            <a href="https://www.instagram.com">instagram</a>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;