import React ,{Component} from 'react'
import './Login.css';

import About from "./About";


class Home extends Component {
	
  render(){
  	let show = this.props.counter
  	
    
    return(
    	  <div className="home">
           <div id="my_div" style ={{display : {show}  && "block" }}>
            <h1 className="h">WELCOME SCREEN </h1>

              
           </div>
          </div>
    	)

  }

}
export default Home