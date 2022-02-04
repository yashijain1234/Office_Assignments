import React from "react";
import './Navbar.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state ={

        };
    }
    render() { 
        return(
                <> 
                    <div>
                        <ul> 
                        <li> <a href="##">Home</a> </li>
                        <li> <a href="##">Contact</a></li>
                        <li><a href="##">About</a> </li>
                        <li className="design"><a href="##" >SignUp</a> </li>
                        <li className="design"><a href="##" >Login</a> </li>
                        </ul>
                    </div>
                    <div className="design"> 
                   <h2 style={{textAlign : "center"}}>Gallery</h2>
                   <img src="./images/img1.jfif"></img>
                  <img src="./images/img2.jfif"></img> 
                   <img src="./images/img3.jfif"></img> 
                   <img src="./images/img4.jfif"></img> 
                   <img src="./images/img5.jfif"></img> 
                  <img src="./images/img6.jfif"></img> 
                  <img src="./images/img7.jfif"></img> 
                  <img src="./images/img8.jfif"></img>  
                   <img src="./images/img9.jfif"></img> 
                   </div>
                </>
            )
     }  
}
export default Navbar;