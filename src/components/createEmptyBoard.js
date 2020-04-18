function createEmptyBoard(){
  const loading = false
    const generatedValues = []
      for (let y = 0; y < 9; y++) {
        const row = []
        for (let x = 0; x < 9; x++) {
          row.push("...")
        }
        generatedValues.push(row)
      }
    return generatedValues
}

export default createEmptyBoard