import React from "react";
//import './App.css';
import './Button.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }
    increase() {
        this.setState({count:this.state.count + 1});
        if(this.state.count %2 ==0) {
            document.getElementById("sample").style.color = "red";
        }
        else {
            document.getElementById("sample").style.color = "green";
        }
        
    }
    decrease() {
        this.setState({count:this.state.count - 1});
        if(this.state.count %2 ==0) {
            document.getElementById("sample").style.color = "red";
        }
        else  {
            document.getElementById("sample").style.color = "green";
        }
        
    }

    reset() {
        this.setState({count:0});
        document.getElementById("sample").style.color = "white";
    }
    render() {
        return(
            <div>
                <h1>Counter App</h1>
               
                <div> <h2 id="sample">My count is {this.state.count}</h2></div> 
                <button className="btn" onClick={() => this.increase()}>Increment</button>
                
                <button className="btn1" onClick={() => this.decrease()} disabled={this.state.count === 0}>
                    
                    Decrement</button>
                
                <button className="btn" onClick={() => this.reset()} disabled={this.state.count === 0}>Reset</button>
            
            </div>
        )
    }
}
export default Counter;