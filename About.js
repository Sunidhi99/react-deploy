import React ,{Component} from 'react'

import './Login.css'

class About extends Component {
  render(){
  	let show = this.props.counter
    return(
    	<div className="about">
           <div id="my_div" style ={{display : {show}  && "block" } }>  

            <form className="primary" >
                <div className='header'>
                 <h1>Registration Form </h1>
                  </div><br/>
                   <div > 
                    <input type="text"  placeholder="username"/>
                  </div><br/>
                   <div> 
                  <input type="text"  placeholder="Email"/>
                  </div><br/>
                   <div > 
                    <input type="text" placeholder="password" />
                  </div><br/>

                  <div > 
                    <input type="tel" placeholder="Mobile number" />
                  </div><br/>
                
                  
                  <div className="footer">
                   <div><button type="submit" >Submit</button></div><br/>
                   
                  </div><br/>
                </form>
            

            </div>
          </div>
    	)

  }

}
export default About