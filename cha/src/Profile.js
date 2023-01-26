import React from "react";
import aziz from './877.jpg'
class Profile extends React.Component{
    constructor(){
        super()
       this.state={
        fullName : "mohamed aziz trabelsi",
        bio : "azerertyyuujhu",
        profession : "azedfvcx",
        count : 0,
          
        }
    }
componentDidMount(){
    setInterval(() => {
        this.setState({count : this.state.count+1})
    }, 1000);
}
render(){
    return(
        <div>
            <h1 className="aziz">{this.state.count}</h1>
            <h1 className="aziz">{this.state.fullName}</h1>
            <h1 className="aziz">{this.state.bio}</h1>
            <h1 className="aziz">{this.state.profession}</h1>
            <div className='image'><img  src={aziz} alt="not" ></img></div>
            
    
        </div>
    )
}

}
export default Profile