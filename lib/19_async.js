
async function async1() {
  return 1
}

async function async2() {
  return 2
}

async function test_async() {

  for await (let result of [async1(), async2()]) {
    console.log(result) // 1, 2
  }

  for (let result of [async1(), async2()]) {
    console.log(result) // Promise
  }
}

function main() {
  test_async()

  console.log('Done')
}

main()

module.exports = main
