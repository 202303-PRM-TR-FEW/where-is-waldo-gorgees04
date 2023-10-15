const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
]

const whereIsWaldo = (matrix) => {
  // create an array to store the object of row to see the diffrent one be true 
  const matrixArr = []

  const main = matrix[0][0]
  for (let i = 0; i < matrix.length; i++){
    const matrixObj = {}
    for (let j = 0; j < matrix[i].length; j++) {
      if (main !== matrix[i][j]) {
        matrixObj[j] = true
      } else {
        matrixObj[j] = false
      }
    }
    matrixArr.push(matrixObj)
  }


  // waldo array will stire the location of the diffrent number 
  let waldo = []

  // store the true and false to see if the first element is the diffrent one 
  // because when the first one is the diffrent one it will be oppposite  
  let isTrue = 0
  let isFalse = 0
  matrixArr.forEach((el, row) => {
    for (column in el) {
      
      if (el[column] % 2 === 1) {
        isTrue++
        waldo.push(row + 1)
        waldo.push(parseInt(column) + 1)
      } else {
        isFalse++
      }
    }
  })

  // check if the true one is more than false one 
  // if the false > true === first one is waldo
  if (isTrue > isFalse) {
    return [1, 1]
  } else {
    return waldo
  }
}


console.log(whereIsWaldo(example))











// const example = [
//   ["A", "A", "A"],
//   ["A", "A", "A"],
//   ["A", "B", "A"]
// ]

// const whereIsWaldo = (matrix) => {
//   // create an array to store the object of row and column
//   const matrixArr = []

//   const main = matrix[0][0]
//   for (let i = 0; i < matrix.length; i++){
//     const matrixObj = {}
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (main !== matrix[i][j]) {
//         matrixObj[j] = true
//       } else {
//         matrixObj[j] = false
//       }
//     }
//     matrixArr.push(matrixObj)
//   }


//   let waldo = []
//   let isTrue = 0
//   let isFalse = 0
//   matrixArr.forEach((el, i) => {
//     for (n in el) {
      
//       if (el[n] % 2 === 1) {
//         isTrue++
//         waldo.push(i + 1)
//         waldo.push(parseInt(n) + 1)
//       } else {
//         isFalse++
//       }
//     }
//   })


// if (isTrue > isFalse) {
//   return [1, 1]
// } else {
//   return waldo
// }

// }


// console.log(whereIsWaldo(example))
