import React ,{Component} from 'react'

class Listing extends Component {
  
constructor(props){
	super(props);
	this.state = [
    {

      user : 'sunidhi',
      password : '1234'
     
    },
    {

      user :'nidhi',
      password : '5678'
    }]
}

 login=(username,pass) => {
 let match =false;
 this.state.map((value) => {
  console.log(value);
  if(username === value.user && pass === value.password){
  	console.log("same name");
  	console.log("same password");
  	match=true;
  }
  })
 return match;
}

  render(){
    return(
           <div></div>
          
    	)

  }

}
export default Listing;