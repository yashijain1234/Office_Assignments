import React,{ useState } from "react";
import Back from './Back';
import SIP from '../../media/images/sip_icon.png';
import STEP from '../../media/images/sip_stepup.jpg';
import DELAY from '../../media/images/sip_delay.png';
import STP from '../../media/images/stp_calci.png';
import SWP from '../../media/images/swp_calci.png';
import '../../media/css/Home.scss'; 

function Home() {
        const mystyle = {
            textDecoration: "none",
            fontSize: "medium",
            fontFamily: "sans-serif",
            border:"none",
            color: "#262626"
        };

const[home , setHome]= useState(false);
function homeCalling() {
    setHome(true);
}
        return(
            <>
              {/* <Slide /> */}
                {home === false && (
                <div className="home_design">
                  <table>
                      <thead> 
                    <tr> 
                        <td><img src={SIP} alt="SIP Calculator" width={40} height={40} /></td>
                        <td><p style={mystyle}>SIP Calculator</p> 
                        <p>Future projection of a SIP amount with given expected returm % .</p> 
                        </td>
                        <td><img src={STP} alt="STP Calculator" width={40} height={40} /></td>
                        <td><p style={mystyle}>STP Calculator</p> 
                        <p>Back-tested STP Calculation with PDF export to be presented to client.</p> 
                        </td>
                    </tr>
                    <tr> 
                        <td><img src={SWP} alt="SWP Calculator" width={40} height={40}/></td>
                        <td><p style={mystyle}>SWP Calculator</p> 
                        <p>Back-tested SWP Calculation with PDF export to be presented to client.</p></td>
                        <td><img src={DELAY} alt="SIP Delay Calculator"width={40} height={40} /></td>
                        <td><p style={mystyle}>SIP Delay Calculator</p> 
                        <p>Future projection if SIP Installment is delay .</p></td>
                    </tr>
                    <tr> 
                        <td><img src={STEP} alt="SIP Step Up Calculator" width={40} height={40} /></td>
                        <td><button onClick={homeCalling} style={mystyle}>SIP Step Up Calculator</button>
                        <p>Future projection of SIP with Yearly Increment in Installment amount .</p></td>
                    </tr>
                    </thead>
                  </table>
                </div>
                )}
               
              {home === true && (
                    <Back />
                )} 
            </>
        );   
}
export default Home;