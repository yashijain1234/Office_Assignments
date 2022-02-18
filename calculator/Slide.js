import React from 'react';
import './Main.css';

function Slide() {
  return (
      <> 
          <div className="nav_design">
                <table>
                    <thead> 
                         <td><img src={require('./logo.png')} width={40} height={40}></img></td>
                             <td>
                                <h1>Investwell</h1>
                            </td>
                                
                     </thead>
                 </table>
            </div>
        <div className="Main"></div>
    </>
  );
}

export default Slide;