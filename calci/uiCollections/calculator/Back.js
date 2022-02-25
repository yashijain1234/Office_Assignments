import React,{ useState } from "react";
import Calculate from './Calculate.js';
import Home from './Home.js';
import '../../media/css/Back.scss';

function Back() {

  const[backbtn , setBackbtn] = useState(true);
  function backFunction() {
    setBackbtn(false);
  }
  return (
      <> 
            {backbtn === true && ( 
                <div>
                  <h3>Sip Step Up Calculator</h3>
                    <button className="back-btn" onClick={backFunction}>← Back </button>
                <Calculate />
                </div>
            )}
            {backbtn === false && (
                <Home />
            )}  
      </> 
  );
}
export default Back;