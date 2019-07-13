import React from 'react';
import MainWrapper from '../../containers/MainWrapper'
import './index.css';

function Home({props}) {
  return (
    <div className="App">
      <MainWrapper props={props} />
    </div>
  )
}

export default Home;
