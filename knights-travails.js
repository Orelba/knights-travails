function knightMoves(source, destination) {
  // All possible move offsets a knight can make on a chessboard
  const KNIGHT_OFFSETS = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ]

  const printOutcome = (moves, path) => {
    console.log(`You made it in ${moves} moves! Here's your path:`)
    for (let i = 0; i < path.length; i++) {
      console.log(path[i])
    }
  }

  let queue = [{ position: source, moves: 0, path: [source] }]
  let visited = new Set()
  let minMoves = Infinity

  while (queue.length !== 0) {
    let { position, moves, path } = queue.shift()
    let [x, y] = position

    // Check if current position is destination position
    if (x === destination[0] && y === destination[1]) {
      if (moves < minMoves) {
        minMoves = moves
        // Print outcome and end loop
        printOutcome(minMoves, path)
        break
      }
    }

    // Iterate over all possible moves
    for (let i = 0; i < KNIGHT_OFFSETS.length; i++) {
      let newX = x + KNIGHT_OFFSETS[i][0]
      let newY = y + KNIGHT_OFFSETS[i][1]

      // check if move offset position is within the chessboard (8x8 board)
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        let newPos = [newX, newY]

        if (!visited.has(`${newX},${newY}`)) {
          visited.add(`${newX},${newY}`)
          queue.push({
            position: newPos,
            moves: moves + 1,
            path: [...path, newPos],
          })
        }
      }
    }
  }
  if (minMoves === Infinity) return 'No solution has been found'
}

module.exports = knightMoves