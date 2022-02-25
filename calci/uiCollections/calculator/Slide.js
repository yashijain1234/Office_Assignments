import React from 'react';
import '../../media/css/Main.scss';
import LOGO from '../../media/images/logo.png';
import Settings from '../../media/images/setting.png';

function Slide() {
  return (
      <> 
          <div className="nav_design">
                <table>
                    <thead>
                            <tr> 
                                <td><img src={LOGO} alt="Investwell" width={40} height={40} /></td>
                                    <td>
                                        <h1>Investwell</h1>
                                    </td>   
                                    <td><img src={Settings} alt="settings"  className="icon" width={20} height={20} /></td>     
                                    <td>
                                        <h2>Settings</h2>
                                    </td>    
                                    <td>
                                        <h2 className="icon_design">DEMONEW</h2>
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