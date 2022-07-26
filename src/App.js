import React from 'react';
import './App.css';
import Row from './components/Row';
import apis from './services/apis';
import Banner from './components/Banner.js';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      < Banner />
      <Row 
        title="Netflix Originals" 
        fetchURL={apis.fetchNetflixOriginals} 
        // below defaults ={true}, so can keep blank
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={apis.fetchTrending} />
      <Row title="Action Movies" fetchURL={apis.fetchActionMovies} />
      <Row title="Top Rated" fetchURL={apis.fetchTopRated} />
    </div>
  );
}

export default App;
