// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';


const palette = {
  primary: { main: '#455A64' },
  secondary: { main: '#E0E0E0' }
};

// const palette = {
//   primary: { main: '#3f51b5' },
//   secondary: { main: '#f50057' }
// };

const themeName = 'sudokuTheme';


export default createMuiTheme({ palette, themeName });
