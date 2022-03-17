import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterDisplay from './components/CounterDisplay';

function App() {
  return (
    <div>
      Hello App Component
      <Counter />
      <CounterDisplay />
    </div>
  );
}

export default App;

///////////////////////////////////////////////////////////////////////////////////////////

// Documentation Links (Learn Redux Toolkit with React-Redux)
//	1.Redux Toolkit Quick Starts
//    https://redux-toolkit.js.org/tutorials/overview
//  2.Getting Started with Redux Toolkit
//    https://redux-toolkit.js.org/introduction/getting-started

//  Commands to Install Redux Toolkit

//  FIRST METHOD (create react app / react-redux  / reduxjs/toolkit)  
//  npx create-react-app my-app
//  cd my-app
//  yarn add react-redux (useDispatch and useSelector are the part of this library)
//  With npm
//  npm install @reduxjs/toolkit (toolkit provide the configure store and other thing)
//  With yarn
//  yarn add @reduxjs/toolkit

//  SECOND METHOD (install two libraries at the same time after creating react app) 
//  npx create-react-app my-app
//  cd my-app
//  npm install @reduxjs/toolkit react-redux

//  THIRD METHOD (Start Reduxjs/toolkit boiler Plate)
//  npx create-react-app my-app --template redux
//  WITH TypeScript
//  npx create-react-app my-app --template redux-typescript


