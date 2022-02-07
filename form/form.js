import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      course: "",
      age: "",
      email: "",
      city:"",
      rows: [],
    };
  }
  handleSubmit(e) {
    let data = {
      name: this.state.name,
      course: this.state.course,
      age: this.state.age,
      email: this.state.email,
      city:this.state.city
    };
    let newRows = this.state.rows;
    newRows.push(data);
    this.setState({
      name: "",
      course: "",
      age: "",
      email: "",
      city:"",
      rows: newRows,
    });
  }

  handleChange(e, field) {
    let data = e.target.value;
    switch (field) {
      case "name":
        this.setState({
          name: data,
        });
        break;
      case "course":
        this.setState({
          course: data,
        });
        break;
      case "age":
        this.setState({
          age: data,
        });
        break;
      case "email":
        this.setState({
          email: data,
        });
        break;
        case "city":
        this.setState({
          city: data,
        });
        break;
      default:
    }
  }

  render() {
    return (
      <>
        <div align="center" className="design">
            <h1 style={{fontFamily:"algerian"}}>Student Info</h1>
            {this.state.name && (
        <h3 align="center">
          Hi, My Name is {this.state.name} and I am pursuing {this.state.course}. My age being {this.state.age} years old.
           Contact me on {this.state.email}.And Home town is {this.state.city}.
        </h3>
        // <br />
        )}

          {/* <label>Name</label> */}
            <input id="name"placeholder="Enter name" type="text" value={this.state.name}
            onChange={(e) => this.handleChange(e, "name")}/>
          <br />

          {/* <label>Course</label> */}
          <input id="course"placeholder="Enter course" type="text" value={this.state.course}
            onChange={(e) => this.handleChange(e, "course")}
          />
          <br />

          {/* <label>Age</label> */}
          <input  id="age" type="number"placeholder="Enter Age" value={this.state.age}
            onChange={(e) => this.handleChange(e, "age")}/>
          <br />
        
          {/* <label>E-mail </label> */}
          <input  id="email" placeholder="Enter e-mail" type="text" value={this.state.email}
            onChange={(e) => this.handleChange(e, "email")} />
          <br />
         
          {/* <label>City</label> */}
          <input  id="city" placeholder="Enter City" type="text" value={this.state.city}
            onChange={(e) => this.handleChange(e, "city")}/>
          <br />
         
          <button className="btn1" onClick={(e) => this.handleSubmit(e)}>
            Submit
          </button>
          
        </div>
        <br />
        
        <div>
          <table
            align="center"
            border="1"
            cellSpacing="2"
            cellPadding="5"
            id="table"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Age</th>
                <th>E-mail</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.rows.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.course}</td>
                    <td>{val.age}</td>
                    <td>{val.email}</td>
                    <td>{val.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Form;