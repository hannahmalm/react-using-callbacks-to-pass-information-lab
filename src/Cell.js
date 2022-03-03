import React, { Component } from 'react';


//props are used to pass information down the component tree, from parents to children. 
//n order to propagate information in the opposite direction, we can use callback functions, also passed down as props from parent components to children. 

//When a particular Cell is clicked, its background color becomes whatever the current selected color is.
export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}