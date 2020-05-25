import React from "react";
import Cockpit from './Cockpit.css'
import AuthContext from "../../content/AuthContent";

const cockpit = (props) => {
   let assignedClasses = [];
   if (props.personsNmber <= 2) {
       assignedClasses.push(Cockpit.green);
   }
   console.log(props.personsNmber);
   if(props.personsNmber <= 1) {
       assignedClasses.push(Cockpit.yellow);
   }
return (
    <div className={Cockpit.Cockpit}> 
     <div>{props.title}</div>
      <h1>hello i am react</h1>
      <button className={assignedClasses.join(' ')} onClick={props.show}>displayPersons</button>
      <AuthContext.Consumer>
         {(context)=> {return (
          <button onClick={context.login}>button </button>
         )}
         }
      </AuthContext.Consumer>
    </div>
)};

export default cockpit;