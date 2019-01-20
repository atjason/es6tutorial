
function test_iterate() {
  const obj = {
    name: 'Tom',
    age: 3,
  }

  for (let key in obj) {
    console.log(key, obj[key])
  }

  for (let key of Object.keys(obj)) {
    console.log(key, obj[key])
  }
}

function test_spread() {
  let {x, ...y} = { x: 1, a: 2, b: 3 }
  // x: 1, y: { a: 2, b: 3 }

  let z = { ...{ x: 1, a: 2, b: 3 } }
  // z: { a: 2, b: 3, x: 1 }
  // same with Object.assign

  let merged = { ...{ x: 1 }, ...{ y: 2 }}
  // merged: { x: 1, y: 2 }

  console.log()
}

function test_assign() {
  const defaults = {
    name: 'Tom',
    age: 3,
  }

  const param = Object.assign({}, defaults, { name: 'Jim' })
  // param: { name: 'Jim', age: 3 }

  let replaced = Object.assign([1, 2, 3], [4, 5])
  // replaced: [4, 5, 3]

  class Point {
    constructor(x, y) {
      Object.assign(this, {x, y});
      // this.x = x
      // this.y = y
    }
  }
}

function main() {
  test_iterate()

  test_spread()

  test_assign()

  console.log('Done')
}

module.exports = main
