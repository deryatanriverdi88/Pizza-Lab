import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    allPizzas:  [],
    editPizza: {}

  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res =>  res.json())
    .then(pizzas =>  {
      this.setState({
        allPizzas: pizzas
      })
    })
  }

  handleEditPizza =(event, pizzaObject)=>{
    // console.log("Pizza Object", pizzaObject)
    this.setState({
      editPizza: pizzaObject
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm newPizzaInfo =  {this.state.editPizza}/>
        <PizzaList pizzas={this.state.allPizzas}  editPizza ={this.handleEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
