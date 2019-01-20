
function main() {
  (0.1 + 0.2) == 0.3 // false
  Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON // true

  Number.MAX_SAFE_INTEGER //  9007199254740991
  Number.MIN_SAFE_INTEGER // -9007199254740991

  // Math.trunc, 去除一个数的小数部分，返回整数部分
  Math.trunc(4.1) // 4
  Math.trunc(4.9) // 4
  Math.trunc(-4.1) // -4
  Math.trunc(-4.9) // -4
  Math.trunc(-0.1234) // -0

  2 ** 3 == Math.pow(2, 3) // 8

  console.log('Done')
}

main()

module.exports = main
