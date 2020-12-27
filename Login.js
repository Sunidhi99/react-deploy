
import React ,{Component} from 'react';
import Home from "./Home";
import About from "./About";
import Listing from "./Listing";

import './Login.css'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      home_show : false,
      about_show : false,
     
      username :'',
      password :'',
      usererror  :'',
      passerror :'',
      
    };  
    this.child=React.createRef();  
  }

  
 
 
  homeIn =(props) =>{
    let result=this.homeclick();
   console.log(result);
   if(result){
    this.setState({
      home_show:true
    })
  }
  else{
    alert("invalid password & username");
    console.log("false");
   }
  }



  homeclick = (props) => {
    console.log("child calling");
    
     let result=this.child.current.login(this.state.username,this.state.password)
     return result;
    
  }

  aboutIn = (props) => {
    this.setState({
      about_show : true
    })
  } 

name =(e) => {
    e.preventDefault();
    let new_name=e.target.value;
    console.log(new_name);
    this.setState({
      username:new_name

    })
   console.log(new_name);
  }
  password12 =(e) =>{
    e.preventDefault();
    let new_pass=e.target.value;
    console.log(new_pass);
    this.setState({
      password:new_pass

    })
    console.log(new_pass)
  } 
  render(){
    let set_visibility = (this.state.home_show || this.state.about_show) ?   "none" : "block"
    let home = this.state.home_show && <Home counter={set_visibility} style ={{overflow : "hidden"}}/> 
    let about = this.state.about_show && <About counter={set_visibility} style ={{overflow : "hidden"}}/> 
    console.log(this.state.result)
    return(
      <div className = "Login">
           <div className="main" style ={{display : set_visibility, overflow:"hidden"}}>
                 <Listing ref ={this.child}/> 
                <form className="primary">
                     <Listing ref ={this.child}/> 
                    <div className='header'>
                        <h1>User Login </h1>
                    </div><br/>
                   
                    <div > 
                        <label>USER NAME </label>
                        <input type="text"  value={this.state.username}  onChange={this.name} placeholder="username" />
                        <p>{this.state.usererror}</p>
                    </div><br/>
                    <div > 
                        <label>PASSWORD</label>
                        <input type="text"  value={this.state.password} onChange={this.password12} placeholder="password" />
                        <p>{this.state.passerror}</p>
                    </div><br/>
                    <div >
                        <input type="checkbox"/>Remember Me 
                    </div><br/>
                    
                </form>
                <div className="footer">
                    <button onClick={this.homeIn.bind(this)} >Login to your account</button><br/>
                 
                    <label>Do not have account ?</label>
                    <button onClick={this.aboutIn.bind(this)} >Sign up</button>
                </div>
            </div>
            {home}
            {about}
        </div>
          
      )

  }

}
export default Login

