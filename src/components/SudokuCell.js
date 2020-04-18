import React, { Component } from 'react'

import {Box,Typography} from "@material-ui/core"
import "../App.css"
import 'typeface-roboto';

export default class SudokuCell extends Component {
  constructor(props){
    super(props)
    this.state = {
      values: this.props.appState.values,
      x: this.props.x,
      y: this.props.y,
      // passed: this.props.passed 
    }
    this.getIndex= this.getIndex.bind(this)
  }
  
  static getDerivedStateFromProps(nextProps, prevState){
    return {
      values:nextProps.appState.values,
      x: nextProps.x,
      y: nextProps.y,
      // passed: nextProps.passed
    }
  }
  // componentWillReceiveProps(){
  //   this.state.x = 
  // }
  getIndex(y,x){
    return (y*9)+x+1
  }
  render() {
    let isGreen = false;
    if((this.getIndex(this.props.y,this.props.x))<=(this.getIndex(this.props.appState.startY,this.props.appState.startX))){
      isGreen = true
    }
    // console.log(this.props.appState.startY,this.props.appState.startX)
    return (      
      
      <Box className = "sudokuCell" bgcolor={isGreen ? "#80cbc4" : "#e57373 "}>
        <b>
        <p className={isGreen ? "sudokuCellTextBlack":"sudokuCellTextBlack"} fontFamily="typeface-roboto" >
          {this.props.appState.values[this.props.y][this.props.x]}
        </p>
        
        </b>
        {/* <p>{isGreen}{this.props.appState.startY}{this.props.appState.startX}</p> */}
      </Box>
    )
  }
}
