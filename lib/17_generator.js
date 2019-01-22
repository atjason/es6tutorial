
function* test_yield() {
  yield 1
  yield 2
  yield 3
  return 4
}

function test_generator() {
  let test = test_yield()
  for (let value of test) {
    console.log(value) // 1 2 3; 4 is ignored by let...of as it's 'done' is true.
  };

  [...test_yield()] // [1, 2, 3]
  Array.from(test_yield()) // [1, 2, 3]
}

function* objectEntries(obj) {
  const keys = Reflect.ownKeys(obj)
  for (let key of keys) {
    yield [key, obj[key]]
  }
}

function test_objectEntries() {
  const obj = { name: 'Tom', age: 3 }
  for (let [key, value] of objectEntries(obj)) {
    console.log(key, value)
  }
}

// 实现状态机
function test_clock() {
  const clock = function* () {
    while(true) {
      console.log('Tick')
      yield
      console.log('Tock')
      yield
    }
  }()

  for (let i = 0; i < 5; i++) {
    clock.next()
  }
}

function main() {
  test_generator()

  test_objectEntries()

  test_clock()

  console.log('Done')
}

main()

///////////////////////

// next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。
// 它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。

// next()是将yield表达式替换成一个值。

const g = function* (x, y) {
  const result = yield x + y
  return result
}

const gen = g(1, 2)
gen.next() // { value: 3, done: false }
gen.next(1) // { value: 1, done: true }
// 相当于将 const result = yield x + y
// 替换成 const result = 1 (undefined if next() has no parameter)

// gen.throw(new Error('出错啦！'))
// 相当于将 const result = yield x + y
// 替换成 const result = throw(new Error('出错啦！'))

gen.return(2)
// 相当于将 const result = yield x + y
// 替换成 const result = return 2

///////////////////////
// yield* 
// 在一个 Generator 函数里面执行另一个 Generator 函数
// 实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历

function* inner() {
  yield 1
  yield 2
}

function* outer() {
  yield 'a'
  yield* inner()
  yield 'b'
}

const gen2 = outer()
gen2.next().value // a
gen2.next().value // 1
gen2.next().value // 2
gen2.next().value // b

module.exports = main
