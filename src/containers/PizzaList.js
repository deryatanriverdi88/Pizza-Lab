import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  sendPizzas =()=>{
    return this.props.pizzas.map((pizza) =>  {
      return <Pizza key={pizza.id} handleEditPizza={this.props.handleEditPizza} pizza={pizza}/>
    })
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
        {this.sendPizzas()}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
