import React from "react";
import Profile from "./Profile";
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      show:false,
    }
  }

  handleShow=()=> this.setState({show : !this.state.show})
render(){
  return(
    <div>
      <button onClick={this.handleShow} >show</button> 
    {

  
      this.state.show && <Profile />
     
      
    }
    </div>
    
  )
}
}



export default App;