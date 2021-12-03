import React from 'react';
import './App.css';
import Add from './Add.js';


function App(){

  return(
    <div id="main">
      <header><h1>ToDo List</h1></header>

      <Add />

      <div id="todo-list"></div>
    </div>
  );
}

export default App;