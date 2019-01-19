
function add([a, b = 1]) {
  return a + b
}

function add2({a, b = 1}) {
  return a + b
}

function multiResult() {
  return [1, 2]
}

function main() {
  let a, b;

  [a, b] = [1, 2];
  // a == 1, b == 2

  [a, b] = [b, a];
  // a == 2, b == 1

  [a, b = 2] = [1];
  // a == 1, b == 2

  let { name, age: theAge } = { name: 'Tom', age: 3 }
  // name == 'Tom', theAge = 3, age is not defined.

  let { message: errorMessage = 'The default error message.'} = {}
  // errorMessage == 'The default error message.'

  let { sin, cos } = Math
  sin(1);

  [a, b] = 'hello'
  // Note: if there's no ; in previous statement, a & b can't be assigned.
  // a == 'h'
  // b == 'e'

  let sum = add([1])
  // sum == 2
  sum = add([1, 2])
  // sum == 3

  sum = add2({ a: 1 })
  // sum == 2
  sum = add2({ a: 1, b: 2 });
  // sum == 3

  [a, b] = multiResult()
  // a == 1, b == 2

  console.log('Done')
}

module.exports = main