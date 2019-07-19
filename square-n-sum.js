// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//should be 9
let firstArray = [1, 2, 2]
//should 1469
let secondArray = [-17,1,13,8,13,16,14,18,1]
//should be 1960
let thirdArray = [-17,-18,18,-2,12,14,-10,13,-19,-7]


function squareSum(nums){
  let squareArray = []
  let squareTotal = 0
  nums.forEach(item => {
    let squareItem = item * item
    squareArray.push(squareItem)
  })
  squareArray.forEach(squareItem => {
    squareTotal += squareItem
  })
  console.log(squareTotal)
  return squareTotal
}
squareSum(firstArray)
squareSum(secondArray)
squareSum(thirdArray)


