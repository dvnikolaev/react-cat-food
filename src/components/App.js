import React from 'react';

import "../assets/stylesheets/App.css";
import Cards from './Card/Cards';

const App = () => {
  return (
    <div>
      <h1 className="page__header">Ты сегодня покормил кота?</h1>
      <Cards />
    </div>
  )
}

export default App;