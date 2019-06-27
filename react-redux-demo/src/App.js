import React from 'react';
import store from "./store/reduces"
import {Provider } from 'react-redux'
import Counter from "./Counter"



import './App.css';



function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
