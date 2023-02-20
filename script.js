const KnightMoves = require('./knights-travails')

// A few demonstrations with the following results:

KnightMoves([0, 0], [7, 7])
// You made it in 6 moves! Here's your path:
// [0, 0]
// [1, 2]
// [2, 4]
// [3, 6]
// [5, 7]
// [6, 5]
// [7, 7]

KnightMoves([0, 1], [7, 5])
// You made it in 5 moves! Here's your path:
// [0, 1]
// [1, 3]
// [2, 5]
// [3, 7]
// [5, 6]
// [7, 5]

KnightMoves([3, 6], [1, 4])
// You made it in 4 moves! Here's your path:
// [3, 6]
// [5, 7]
// [4, 5]
// [2, 6]
// [1, 4]