import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      headerText: 'Hello there',
      contentText: 'My Page Start from here!'
    }
  }
  render() {
  
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Clock/>
        {/*<h1>{this.state.headerText}</h1>

        <p>{this.state.contentText}</p>*/}

       
      </div>
    );
  }
}

class Clock extends Component{

  constructor(props){
    super(props);
    this.state={
      date : new Date()
    }
  }

  componentDidMount(){
    this.timeID = setInterval(()=>{this.tick()}, 1000)
  }

 tick(){
    this.setState({date: new Date()});
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  render(){
    return(
      <h1>The Time is:{this.state.date.toLocaleDateString()} </h1>
    );
  }
}


class Header extends Component{
  render(){
    return(
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello there!!</h2>
    </div>
    );

  }
}

class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          "id":1,
          "name":'pri',
          "age": 20
        },
        {
          "id":2,
          "name":'anish',
          "age": 25
        },
        {
          "id":3,
          "name":'rohit',
          "age": 35
        }


      ]
    }
  }
  render(){
      const mystyle ={
      color: 'red',
      fontsiz:20

    };
    return (
       <div>
         <p className="App-intro" data-myattribute="attr">
          <h1>My Page Start from here!</h1>
          Here I just started learning reactjs and I am enjoying alot.
        </p>
        
         <p>
           <h2 style={mystyle}>Few points on reactjs</h2>
        </p>
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          
           
           <tbody>
              {this.state.data.map((person, i)=> <TableRow key= {i} data= {person}/> )}
           </tbody>
          </table>
       </div>
       
    );
  }
}

class TableRow extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>

        <td>{this.props.data.name}</td>

        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
