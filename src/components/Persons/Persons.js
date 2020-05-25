import React from "react";
import Person from "./Person/Person";

const persons = (props) => props.persons.map((p, index) => {
    return (
      <Person click={() => props.delete(index)}
        change={(event) => props.changed(event, p.id)}  
        name={p.name} 
        age={p.age}
        key={p.id}
        isAuth={props.isAuth}
      /> 
    )
});

export default persons;

