import React, { Component } from 'react'

import {Box,Grid} from "@material-ui/core"
import "../App.css"
import SudokuCell from "./SudokuCell"

export default class SudokuRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      y: this.props.y,
      values:this.props.appState.values,
    }
    this.constructRow = this.constructRow.bind(this)
  }
  static getDerivedStateFromProps(nextProps, prevState){
    return {
      values:nextProps.appState.values,
      y: nextProps.y
    }
  }
  constructRow(){
    const row = []
    for (let x = 0; x < 9; x++) {
      row.push(
        <SudokuCell x = {x} y={this.state.y} appState = {this.props.appState} key ={[this.state.y,x]}/>
      )
    }
    return row
  }
  render() {
    const renderRow = this.constructRow()
    return (
      <Box className = "sudokuRow">
        {renderRow}
      </Box>
    )
  }
}
