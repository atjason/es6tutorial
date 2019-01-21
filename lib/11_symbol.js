
const Shape = {
  triangle: Symbol()
}

function main() {

  if ('' == Shape.triangle) {
    // do something.
  }

  Symbol.for('foo') == Symbol.for('foo')
  Symbol('foo') != Symbol('foo')

  console.log('Done')
}

main()

module.exports = main
