import React from 'react';
import Header from './containers/Header'
import MainWrapper from './components/MainWrapper'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainWrapper />
      <Footer />
    </div>
  )
}

export default App;
