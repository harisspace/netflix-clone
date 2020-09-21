import React from 'react';
import Row from './components/Row';
import request from './request/request';
import Banner from './components/Banner';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner fetchUrl={request.fetchNetflixOriginals} />
      <Row isLarge title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
