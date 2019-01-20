
function test_spread() {
  let arr = [1, 2]
  arr.push(...[3, 4])

  let [first, ...rest] = arr;
  // first == 1

  [...'x\uD83D\uDE80y'].length // 3
}

function test_from() {
  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3,
  }
  let arr = Array.from(arrayLike)
  // arr: [1, 2, 3]

  // [...arrayLike]
  // TypeError: arrayLike is not iterable  

  Array.from('x\uD83D\uDE80y').length // 3

  console.log()
}

function test_of() {
  Array.of(1, 2, 3)
  // [1, 2, 3]

  console.log()
}

function test_copyWithIn() {
  let arr = [1, 2, 3]
  arr.copyWithin(0, 1, 2)
  // arr: [2, 2, 3]
}

function test_find() {
  let arr = [1, 2, 3]

  arr.indexOf(2) // 1
  arr.find(n => n == 2) // 2
  arr.findIndex(n => n == 2) // 1
  
  arr.includes(2) // true
}

function main() {
  test_spread()

  test_from()

  test_of()

  test_copyWithIn()

  test_find()

  console.log('Done')
}

main()

module.exports = main
