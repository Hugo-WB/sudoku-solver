import { cloneElement } from "react";
function clone(obj) {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}
function solve(inputBoard) {
  const board = clone(inputBoard);
  // const board = inputBoard
  function possible(y, x, n) {
    var result = true;
    for (let i = 0; i < 9; i++) {
      if (board[y][i] === n || board[i][x] === n) {
        result = false;
      }
    }

    const quadrant = [Math.floor(y / 3), Math.floor(x / 3)];
    for (let yQuad = 3 * quadrant[0]; yQuad < 3 * quadrant[0] + 3; yQuad++) {
      for (let xQuad = 3 * quadrant[1]; xQuad < 3 * quadrant[1] + 3; xQuad++) {
        if (board[yQuad][xQuad] === n) {
          result = false;
        }
      }
    }
    // console.log("potato"+result)
    return result;
  }
  // function loop(){
  //   for (let y = 0; y < 9; y++) {
  //     for (let x = 0; x < 9; x++) {
  //       if (board[y][x] === 0){
  //         for (let i = 1; i < 10; i++) {
  //           if (possible(y,x,i)){
  //             console.log(y,x,i)
  //             board[y][x] = i
  //             console.log("?"+board)
  //             loop()
  //             board[y][x]=0
  //           }

  //         }
  //         return
  //       }
  //     }
  //   }
  // }
  const steps = [];

  function solveSudoku(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == 0) {
          for (let k = 1; k <= 9; k++) {
            if (possible(i, j, k)) {
              board[i][j] = k;
              steps.push([i, j, k]);
              if (solveSudoku(board)) {
                return true;
              } else {
                board[i][j] = 0;
                steps.push([i, j, 0]);
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  const start = window.performance.now();
  
  solveSudoku(board);
  const end = window.performance.now();
  const time = Math.round(end - start);
  steps.push([8,8,board[8][8]])
  return [steps, time,board];
}
// console.log(solve(inBoard))
export default solve;
