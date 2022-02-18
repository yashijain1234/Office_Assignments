import React from "react";
import{ Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component{
    render(){
        return(
            <>
                <div className="sample">
                  <table>
                    <tr> 
                        <td><img src={require('./sip_icon.png')} width={40} height={40}></img></td>
                        <td><p><Link to="/" className="mystyle">SIP Calculator</Link></p> 
                        <p>Future projection of a SIP amount with given expected returm % .</p> 
                        </td>
                        <td><img src={require('./stp_calci.png')} width={40} height={40}></img></td>
                        <td><p><Link to="/" className="mystyle">STP Calculator</Link></p> 
                        <p>Back-tested STP Calculation with PDF export to be presented to client.</p> 
                        </td>
                        
                    </tr>
                    <tr> 
                        <td><img src={require('./swp_calci.png')} width={40} height={40}></img></td>
                        <td><p><Link to="/" className="mystyle">SWP Calculator</Link></p> 
                        <p>Back-tested SWP Calculation with PDF export to be presented to client.</p></td>
                        <td><img src={require('./sip_delay.png')} width={40} height={40}></img></td>
                        <td><p><Link to="/" className="mystyle">SIP Delay Calculator</Link></p> 
                        <p>Future projection if SIP Installment is delay .</p></td>
                    </tr>
                    <tr> 
                        <td><img src={require('./sip_stepup.jpg')} width={40} height={40}></img></td>
                        <td><p><Link to="/Calculate" className="mystyle">SIP Step Up Calculator</Link></p> 
                        <p>Future projection of SIP with Yearly Increment in Installment amount .</p></td>
                    </tr>
                  </table>
                </div>
            </>
        )
    }
}
export default Home;