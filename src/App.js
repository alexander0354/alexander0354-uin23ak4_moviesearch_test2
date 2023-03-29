import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/App.scss';
import MovieList from './components/MovieList';
import MovieProfile from './components/MovieProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Movies</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/search/:searchQuery" component={MovieList} />
            <Route path="/movie/:id" component={MovieProfile} />
          </Switch>
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

/*
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Movies</h1>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/search/:searchQuery" component={MovieList} />
            <Route path="/movie/:id" component={MovieProfile} />
          </Switch>
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
}*/