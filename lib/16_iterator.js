
class Range {
  constructor(start, end) {
    Object.assign(this, { start, end })
  }

  [Symbol.iterator]() {
    return {
      // Should use => to lock this.
      // bad: next() {}
      // bad: next: function() {}
      next: () => { 
        if (this.current == undefined) this.current = this.start

        if (this.current < this.end) {
          return { value: this.current++ }
        } else {
          return { done: true }
        }
      },

      // Will be called if iterator is breaked. 
      // Usually used to release resource.
      return: () => { 
        console.log('return')
        return { done: true }
      }
    }
  }
}

function test_iterator() {
  const range = new Range(0, 3)
  for (let index of range) {
    console.log(index)
    break
  }
}

function main() {
  test_iterator()

  console.log('Done')
}

main()

module.exports = main
