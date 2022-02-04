import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hello from './Hello';
// import Stateobj from './Stateobj';
// import ChangeStateObj from './ChangeStateObj';
// import Mounting_method2 from './Mounting_method2';
// import Mounting_method3 from './Mounting_method3';
// import Parent from './Parent';
// import Child from './Child';
// import Counter from './Counter';
import Navbar from './navigation/Navbar';
// import SPexample from './components/State_props_example';
// import Test from './Mounting methods/Test';


ReactDOM.render(
  <React.StrictMode>
    {/* <Test/>
   <SPexample  course={"MCA"} 
    clg_name={"KIET Group of Institutions"} 
    /> 
    <App /> 
     <Hello/>
    <Stateobj/>
    <ChangeStateObj/>
    <Mounting_method2/>
    <Mounting_method3/>
    <Child/>
    <Parent name={"Yashi"}/> */}
    {/* <Counter language={"React.js"}/>   */}
    <Navbar/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
