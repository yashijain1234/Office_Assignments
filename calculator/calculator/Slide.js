import React from 'react';
import './Main.css';

function Slide() {
  return (
      <> 
          <div className="nav_design">
                <table>
                    <thead>
                            <tr> 
                                <td><img src={require('./logo.png')} alt="Investwell" width={40} height={40}></img></td>
                                    <td>
                                        <h1>Investwell</h1>
                                    </td>
                                        
                            </tr>
                    </thead>
                 </table>
            </div>
        <div className="Main"></div>
    </>
  );
}

export default Slide;