// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Routes2, Store } from '../config';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={Store}>
      <Routes2 />
    </Provider>
  );
}

export default App;
