
function test_promise() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(true)
      reject(new Error('failed'))
    }, 100)

  }).then(result => {
    console.log(result)

  }).catch(error => {
    console.log(error)

  }).finally(() => {
    console.log('finally')
  })
}

function main() {
  test_promise()

  // const p = Promise.all([p1, p2, p3])
  // const p = Promise.race([p1, p2, p3])

  console.log('Done')
}

main()

module.exports = main
