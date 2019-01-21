
function test_set() {
  let set = new Set([1, 2]);
  [...set] // change set to array

  set.size // 2

  set.add(3)
  set.has(3) // true

  for (let item of set) {
    console.log(item)
  }

  set.forEach(value => {
    console.log(value)
  })

  set.delete(3)
  set.clear()
  set.size; // 0
}

function test_map() {
  let map = new Map()

  map.set('name', 'Tom')
  map.set('age', 3)
  map.size // 2

  map.get('name') // 'Tom'

  for (let [key, value] of map) {
    console.log(key, value)
  }

  map.forEach((value, key) => {
    console.log(key, value)
  })

  map.delete('name')
  map.clear()
  map.size // 0
}

function main() {
  test_set()

  test_map()

  console.log('Done')
}

main()

module.exports = main
