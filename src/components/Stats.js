import React, { Component } from 'react'
import {Box,Typography,Paper,Card, CardContent,Grid} from "@material-ui/core"
import sudokuTheme from "../theme"
import "../App.css"

export default class Stats extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <Box margin="1em">
        <Grid container spacing={2} justify="center" alignItems="center" className="resultsGrid">
          <Grid item xs = {12} md={4}>
            <Card className="statsBox" style={{backgroundColor:"#eceff1"}}>
              <CardContent>
                <Typography color="primary" variant="h6" className="resultText">
                  Time taken: {this.props.stats.time} ms
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs = {12} md={4}>
            <Card className = "statsBox" style={{backgroundColor:"#eceff1"}}>
              <CardContent>
                <Typography color="primary" variant="h6" className="resultText">
                  Number of Moves made: {this.props.stats.moves}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
