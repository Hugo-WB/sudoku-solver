import React, { Component } from "react";

import { Typography, Box, Paper, Button ,ThemeProvider,Checkbox,Grid} from "@material-ui/core";
import "../App.css";
import sudokuTheme from "../theme"
import { createMuiTheme } from '@material-ui/core/styles';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Box display="flex" justifyContent="space-around" flexDirection="column">
        <Box margin="2em">
          <Grid container spacing = {2} className="gridContainer">
            <Grid container xs ={12} md={12} className="gridContainer">
              <Typography color="primary" variant="h1">
                Sudoku Solver
              </Typography>
            </Grid>
            <Grid container xs={12} md={3} className="gridContainer">
              <Button
              color = "primary"
              variant="outlined"
              onClick={this.props.solveB}
              >Solve with Backtracking</Button>

            </Grid>
            
            <Grid container xs={12} md={3} className="gridContainer">
              <Button
                color = "primary"
                onClick = {this.props.newBoard}
                variant="outlined"
                name="load"
              >Load New Sudoku Problem</Button>
              
            </Grid>
            
            <Grid container xs={12} md={3} className="gridContainer">
              <Button
              color = "primary"
              variant="outlined"
              onClick={this.props.imediateSolve}
              >Show Answer</Button>
              
            </Grid>
          </Grid>

        </Box>
        
        <div />
      </Box>
    );
  }
}
