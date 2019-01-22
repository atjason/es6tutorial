
class Shape {
  constructor() {
    this.area = 0
  }

  static sayHello() {
    console.log('Hello World.')
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()

    this.area = Math.PI * (radius ** 2)
  }
}

function test_class() {
  Circle.sayHello()

  const circle = new Circle(1)
  circle.area // 3.1415926
}

function main() {
  test_class()

  console.log('Done')
}

main()

module.exports = main
