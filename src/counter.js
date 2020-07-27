import React, {Component} from "react"

class Counter extends Component{
  render(){
    return(
      <div>
        <button className= "button" onClick={this.props.counterMinus}>-</button>
        <span className= "counter">{this.props.countValue}</span>
        <button className= "button" onClick={this.props.counterPlus}>+</button>
      </div>
    );
  }
}

export default Counter;
