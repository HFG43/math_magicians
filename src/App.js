import React from 'react';
import Calculator from './components/calculator';
import Quote from './components/ninja';

function App() {
  return (
    <>
      <div className="ninja_quote">
        <Quote />
      </div>
      <div className="app">
        <Calculator />
      </div>
    </>
  );
}

export default App;
