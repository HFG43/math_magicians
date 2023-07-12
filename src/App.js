import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/ninja';
import NavBar from './components/navbar';
import NotFound from './components/notFound';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.app_container}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
