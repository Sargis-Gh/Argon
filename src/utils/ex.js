//      Rotate Matrix

// [1, 2, 3]        [7, 4, 1]
// [4, 5, 6]   -->  [8, 5, 2]
// [7, 8, 9]        [9, 6, 3]

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function rotateMatrix(matrix) {
    let len = matrix.length
    let newMatrix = []
    for (let i = 0; i < len; i++) {
        newMatrix.push(new Array(len).fill(0))
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            newMatrix[i][j] = matrix[len - j - 1][i]
        }
    }
    return newMatrix
}

let newMatrix = rotateMatrix(matrix)
for (let row of newMatrix) {
    console.log(row)
}

/*
[                               |   [
    [                           |       { item: 1, id: 1 },
        { item: 1, id: 1 },     |       { item: 2, id: 2 },
        { item: 2, id: 2 },     |       { item: 3, id: 3 },
    ],                          |       { item: 4, id: 4 },
    [                           |       { item: 5, id: 5 },
        { item: 3, id: 3 },     |       { item: 6, id: 6 },
        { item: 4, id: 4 },     |   ]
    ],                          |
    [                           |
        { item: 5, id: 5 },     |
        { item: 6, id: 6 },     |
    ],                          |
]                               |
*/

let data = [
    [
        { item: 1, id: 1 },
        { item: 2, id: 2 },
    ],
    [
        { item: 3, id: 3 },
        { item: 4, id: 4 },
    ],
    [
        { item: 5, id: 5 },
        { item: 6, id: 6 },
    ],
]

function mergeElements(data) {
    data = data.reduce((acumulator, currentValue) => acumulator.concat(currentValue))
    console.log(data)
}

mergeElements(data)
