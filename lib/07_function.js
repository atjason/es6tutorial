
function test_paramDefaultValue(x = 5, { name = 'Tom'} = {}) {
  console.log(x, name)
}

function test_rest(...arr) {
  let sum = 0
  arr.forEach(num => sum += num)
  return sum
}

class Timer {
  constructor() {
    this.s1 = 0
    this.s2 = 0
    this.s3 = 0
  }

  test() {
    this.interval1 = setInterval(() => {
      console.log('s1: ', this.s1++) // this is current instance of Timer.
    }, 1000)
    this.interval2 = setInterval(function() {
      console.log('s2: ', this.s2++) // this is NOT current instance of Timer.
    }, 1000)
  }

  reset() {
    clearInterval(this.interval1)
    clearInterval(this.interval2)
  }
}

function add_s3() {
  console.log(this.s3)
  this.s3++
  console.log(this.s3)
}

function main() {
  test_paramDefaultValue()

  test_rest(1, 2, 3) // 6

  test_rest.name // 'test_name'

  const atimer = new Timer()
  atimer.test()

  setTimeout(() => console.log('s1', atimer.s1), 3100)
  setTimeout(() => console.log('s2', atimer.s2), 3100)
  setTimeout(() => atimer.reset(), 3100)

  console.log('Done')
}

main()

module.exports = main
