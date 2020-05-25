import React, { Component } from 'react';
import classes from './App.css';
import Persons from  '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClasses from "../hoc/withClasses";
import Aux from "../hoc/aux";
import AuthContext from "../../src/content/AuthContent";

class App extends Component {
  

  state = {
      person: [
          {id: 1, name: "vlad", age: 26},
          {id: 2, name: "egor", age: 21},
          {id: 3, name: "boris", age: 61}
      ],
      isShowPersons: false,
      counter: 0,
      authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App js rendering...", props);
    return state;
  }

  componentDidMount() {
    console.log("componentdidmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldcomponent");
    return true;
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
  }

  swichNameHandler = (newVal) => {
    this.setState({
      person: [
        { name: newVal, age: 10},
        { name: "maximilian", age: 10},
        { name: "maximilian", age: 10}
      ]
    })
  }

  changeName = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: 10},
        { name: event.target.value, age: 10},
        { name: event.target.value, age: 10}
      ]
    })
  }

  changePersonName = (event, personId) => {
      let persons = [...this.state.person];
      
      let personIndex = persons.findIndex(p => {
        return p.id === personId;
      })
      let person = {...persons[personIndex]};
      person.name = event.target.value;
      persons[personIndex] = person;
      this.setState((prevState, props)=>{
        return {
            person: persons,
            counter: prevState.counter + 1
        }
      })

  }

  showPersons = () => {
      this.setState({
        isShowPersons: !this.state.isShowPersons
      })  
  }

  deletePerson = (indexPerson) => {
    let person = [...this.state.person];
    person.splice(indexPerson, 1);
    this.setState({
      person: person
    }) 
  }

  toggleLogin = () => {
    this.setState({
      authenticated:true
    })
  }

    render() {

        let persons = null;
        if(this.state.isShowPersons) {
          persons = (
            <div>
              <Persons 
                persons={this.state.person}
                delete={this.deletePerson}
                changed={this.changePersonName}
                isAuth={this.state.isAuth}
              />
            </div>
          )
        }
        return (

          <Aux>
             <AuthContext.Provider 
             value={{authenticated: this.state.authenticated,
                     login: this.toggleLogin}}>
              <Cockpit 
                title={this.props.title}
                personsNmber={this.state.person.length} 
                show={this.showPersons}
              />
             
                {persons}  
              </AuthContext.Provider>
              
          </Aux>
        );
        }
  }

export default withClasses(App, classes.App);
