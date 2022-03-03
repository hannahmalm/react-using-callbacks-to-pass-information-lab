import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'


//we need some way for Cell to know about the currently selected color and we also need a way for ColorSelector to modify the selected color based on user input. 
export default class Matrix extends Component {

  constructor() {
    super()
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  //create the state and assign it value of white
  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  //set the state to whatever the new color is that is passed in 
  //this method updates selectedColor with whatever is passed into it as an argument.
  //ColorSelector will need access to this function 
    // This is done by PASSING it down as a prop
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  //cell only needs to know the currently selected color, not change it.
  //We can pass this in to every Cell returned by genRow() as a prop called selectedColor:
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )


  //matrix is the parent that renders a color selector
  //Remember that when using arrow functions, you can use parentheses instead of curly braces to implicitly return a value.
  //pass the setSelectedColor funciton in as a prop
  render() {
    return (
      <div id="app">
      <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}