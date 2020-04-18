import React, { Component } from "react";
import {Box,Grid,ThemeProvider} from "@material-ui/core"
import SudokuRow from "./components/SudokuRow"
import Header from "./Header/Header";
import createEmptyBoard from "./components/createEmptyBoard"
import sudokuTheme from "./theme"
import "./App.css";
import loading from "./components/loading"
import solve from "./solver/solver"
import Stats from "./components/Stats"
let loop
export default class App extends Component {
  constructor(){
    super()
    this.state= {
      values:createEmptyBoard(),
      isLoading:true,
      solverStats:{
        moves: 0,
        time: 0,
      },
      startY:0,
      startX:0,
      
    }
    this.constructSudokuTable = this.constructSudokuTable.bind(this)
    this.fetchNewSudoku = this.fetchNewSudoku.bind(this)
    this.solveBoard = this.solveBoard.bind(this)
    this.setToLoad=this.setToLoad.bind(this)
    this.imediateSolve = this.imediateSolve.bind(this)
  }
  componentDidMount(){
    this.fetchNewSudoku()
  }
  constructSudokuTable(){
    const sudoku = []
    for (let y = 0; y < 9; y++) {
      sudoku.push(
        <SudokuRow y={y} appState = {this.state} key ={y}/>
      )
    }
    return sudoku
  }
  solveBoard(){
    const [steps,timeTaken] = solve(this.state.values)
    if(steps === []){
      return
    }
    console.log(steps)
    // console.log(timeTaken)
    this.setState({
      solverStats:{
        moves:steps.length,
        time: timeTaken, 
      }
    })
    let i =0;
    loop = setInterval(() => {
      if (i>=(steps.length-1)){
        console.log("hello")
        this.setState({
          startY:10,
          startX:10,
        })
        clearInterval(loop)
      }
      this.setState((prevState)=>{
        const updateBoard = prevState.values
        updateBoard[steps[i][0]][steps[i][1]] =steps[i][2]
        return{
          startY: steps[i][0],
          startX: steps[i][1],
          values:updateBoard,
      }})
      i++
    }, 1000);
  }
  imediateSolve(){
    const [steps,timeTaken,board] = solve(this.state.values)
    if(steps === []){
      return
    }
    this.setState({
      solverStats:{
        moves:steps.length,
        time: timeTaken, 
      },
      values:board,
      startX:20,
      startY:20,
    })
  }
  fetchNewSudoku(){
    clearInterval(loop)
    this.setState({
      isLoading:true,
      startY:0,
      startX:0,
    })
    fetch("https://sugoku.herokuapp.com/board?difficulty=easy")
    .then(response => response.json())
    .then(data => {
      const inputData = data.board
      this.setState({
        values: inputData,
        isLoading:false,
      })
      
    })
    
    
  }
  setToLoad(){
    console.log(this.state.values)
  }
  render() {
    const sudokuTable = this.constructSudokuTable()
      return (
        <ThemeProvider theme = {sudokuTheme}>
        <Box display = "flex" alignContent="center" justifyContent="center" flexDirection="column" bgcolor="#eceff1">
        <Header newBoard = {this.fetchNewSudoku} solveB={this.solveBoard} load={this.setToLoad} imediateSolve={this.imediateSolve}/>
        <Box className="sudokuBox">
          {this.state.isLoading ? loading:sudokuTable}
        </Box>
        <Stats stats = {this.state.solverStats}/>
        </Box>
        </ThemeProvider>
        
      )
  }
}
