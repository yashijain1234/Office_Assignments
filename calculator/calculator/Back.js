import React,{ useState } from "react";
import Calculate from './Calculate';
import Home from './Home';

function Back() {

  const[backbtn , setBackbtn] = useState(true);
  function backFunction() {
    setBackbtn(false);
  }
  return (
      <> 
            {backbtn === true && ( 
                <div>
                    <button className="button1" onClick={backFunction}>← Back </button>
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