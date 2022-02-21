import React,{ useState } from "react";
import Back from "./Back";
// import Slide from "./Slide";

function Home() {
        const mystyle = {
            textDecoration: "none",
            fontSize: "medium",
            fontFamily: "sans-serif",
            border:"none",
            backgroundColor: "white"
        };

const[home , setHome]= useState(false);
function homeCalling() {
    setHome(true);
}
        return(
            <>
              {/* <Slide /> */}
                {home === false && (
                <div className="sample">
                  <table>
                      <thead> 
                    <tr> 
                        <td><img src={require('./sip_icon.png')} alt="SIP Calculator" width={40} height={40}></img></td>
                        <td><p style={mystyle}>SIP Calculator</p> 
                        <p>Future projection of a SIP amount with given expected returm % .</p> 
                        </td>
                        <td><img src={require('./stp_calci.png')} alt="STP Calculator" width={40} height={40}></img></td>
                        <td><p style={mystyle}>STP Calculator</p> 
                        <p>Back-tested STP Calculation with PDF export to be presented to client.</p> 
                        </td>
                    </tr>
                    <tr> 
                        <td><img src={require('./swp_calci.png')} alt="SWP Calculator" width={40} height={40}></img></td>
                        <td><p style={mystyle}>SWP Calculator</p> 
                        <p>Back-tested SWP Calculation with PDF export to be presented to client.</p></td>
                        <td><img src={require('./sip_delay.png')} alt="SIP Delay Calculator"width={40} height={40}></img></td>
                        <td><p style={mystyle}>SIP Delay Calculator</p> 
                        <p>Future projection if SIP Installment is delay .</p></td>
                    </tr>
                    <tr> 
                        <td><img src={require('./sip_stepup.jpg')} alt="SIP Step Up Calculator" width={40} height={40}></img></td>
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