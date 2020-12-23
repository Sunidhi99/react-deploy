//===================== LOGIN.JS=======================================================
import React ,{Component} from 'react';
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About"
import './Login.css'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      home_show : false,
      about_show : false
    };    
  }

  homeIn = (props) => {
    this.setState({
      home_show : true
    })
    
  }

  aboutIn = (props) => {
    this.setState({
      about_show : true
    })
  } 

  render(){
    let set_visibility = (this.state.home_show || this.state.about_show) ?   "none" : "block"
    let home = this.state.home_show && <Home counter={set_visibility} style ={{overflow : "hidden"}}/> 
    let about = this.state.about_show && <About counter={set_visibility} style ={{overflow : "hidden"}}/> 
    
    return(
      <div className = "Login">
           <div className="main" style ={{display : set_visibility, overflow:"hidden"}}>
             
                <form className="primary">
                    <div className='header'>
                        <h1>User Login </h1>
                    </div><br/>
                    <div > 
                        <label>USER NAME</label>
                        <input type="text"  placeholder="username"/>
                    </div><br/>
                    <div > 
                        <label>PASSWORD</label>
                        <input type="text" placeholder="password" />
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

