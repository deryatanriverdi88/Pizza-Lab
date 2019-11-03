import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    allPizzas:  [],
    pizzaObject: {}, 
    topping: '',
    size: 'Small',
    vegetarian: ''
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

  handleCreatePizza =(event)=>{
    console.log(event.target.name, this.state.size)
    this.setState({
     [event.target.name]: event.target.value
    })
  }


  handleSubmit = (e) =>{
    // console.log("submit")
    e.preventDefault()
    fetch("http://localhost:3000/pizzas",  {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        topping: this.state.topping,
        size: this.state.size,
        vegetarian: JSON.parse(this.state.vegetarian)
      })
    })
    .then (res => res.json())
    .then(pizzaObject => {
      this.setState({
        allPizzas: [pizzaObject, ...this.state.allPizzas]
      })
    })
    .then(
      this.setState({
        topping: '',
        size: 'Small',
        vegetarian: null
      })
    )
  }


  handleEditPizza =(e, pizza)=>{
    // console.log('edit pizza', pizza)
    this.setState({
      pizzaObject: pizza
    })
  }

  handleEditSubmit = () => {
    console.log('edit submit')
  }


  render() {
    // console.log(this.state.pizzaObject)
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaObject={this.state.pizzaObject}
                   handleEditSubmit={this.handleEditSubmit}
                   handleEditPizza={this.handleEditPizza}
                   handleCreatePizza={this.handleCreatePizza}
                   handleSubmit={this.handleSubmit}
                   topping={this.state.topping}
                   size={this.state.size}
                   vegetarian={this.state.vegetarian}/>
        <PizzaList pizzas={this.state.allPizzas}  
                   handleEditPizza={this.handleEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
