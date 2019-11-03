// import React from "react"

// const PizzaForm = (props) => {
//   console.log(props.pizzaObject)
//   return(
     
//        <div className="form-row">
//         <div className="col-5">
//             <input type="text" 
//             className="form-control" placeholder="Pizza Topping" 
//             onChange={props.handleCreatePizza}
//             name="topping"
//             value={props.topping}/>
//         </div>
//         <div className="col">
//           <select className="form-control"
//                   onChange={props.handleCreatePizza}
//                   name="size">
//             <option value="Small">Small</option>
//             <option value="Medium">Medium</option>
//             <option value="Large">Large</option>
//           </select>
//         </div>
//         <div className="col">
//           <div className="form-check">
//             <input className="form-check-input" type="radio" name="vegetarian" 
//                    onChange={props.handleCreatePizza}
//                    value='true'/>
//             <label className="form-check-label">
//               Vegetarian
//             </label>
//           </div>
//           <div className="form-check">
//             <input className="form-check-input" type="radio" name="vegetarian" 
//             onChange={props.handleCreatePizza}
//             value='false'/>
//             <label className="form-check-label">
//               Not Vegetarian
//             </label>
//           </div>
//         </div>
//         <div className="col">
    
//        {/* {!this.props.pizzaObject.id ? <input type="submit" className="btn btn-success"  onClick={this.props.handleSubmit} /> : <input type="submit" value="Edit"/>} */}
//         </div>
//       </div> 
      

//   )
// }




import React, { Component } from "react";

export default class PizzaForm extends Component {
  render() {
    return (
      <div className="form-row">

         <form onChange={this.props.handleCreatePizza}>
           <label htmlFor="topping">Topping</label>
           <input type="text" value={this.props.topping} id="topping" placeholder="Pizza Topping" name="topping"/>
           <select className="size" name="size" value={this.props.size}>
             <option value="Small">Small </option>
             <option value="Medium" >Medium </option>
             <option value="Large" >Large </option>
           </select>
           <div className="form-check"> 
           <label htmlFor="vegetarian" className="label">
             Vegetarian
           </label>
           <input type="radio" name="vegetarian" id="vegetarian" value="true"/>
            <label htmlFor="non vegetarian" className="label">
             Non Vegetarian
           </label>
           <input type="radio" name="vegetarian" id="non vegetarian" value="false"/> </div>
           
           <input type="Submit" onClick={this.props.handleSubmit}/>
         </form>
      </div>
    )
    ;
  }
}
