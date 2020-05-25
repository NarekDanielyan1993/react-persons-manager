import React, {Component} from 'react';
import classes from "./Person.css";
import withClass from "../../../hoc/withClasses";
import AuthContext from "../../../content/AuthContent";

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <div>
                {this.context.authenticated ? <p>login</p> : <p>authenticated</p>}
                <h1 onClick={this.props.click}>i am a {this.props.name} and my age is {this.props.age}</h1>
                <p>{this.props.children}</p>
                <input ref={this.inputElRef} type="text" onChange={this.props.change} value={this.props.name} />  
            </div>
        )
    }
}

export default withClass(Person, classes.Person);