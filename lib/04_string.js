
function testUnicode() {
  // 使用\u{}表示超出 0xFFFF 的 Unicode
  let str = '\u{20bb7}a'          // '𠮷a'

  // 使用 codePointAt 获取指定位置字符的编码，但对超出 0xFFFF 的 Unicode，还是会占据 2 个位置
  str.codePointAt(0).toString(16) // 20bb7, i.e., 𠮷
  str.codePointAt(1).toString(16) // dfb7,  i.e., part of 𠮷
  str.codePointAt(2)              // 97,    i.e., a

  String.fromCodePoint(0x20BB7) // 𠮷

  // for…of 可以正确识别出超出 0xFFFF 的 Unicode
  for (let char of str) {
    console.log(char) // 𠮷a
  }
}

function testContains() {
  let str = 'Hello world'

  str.includes('Hello') // true

  str.startsWith('Hello') // true
  str.startsWith('Hello', 1) // false
  str.startsWith('world', 6) // true, 6 means test from the 6th char.

  str.endsWith('world') // true
  str.endsWith('Hello', 5) // true, 5 means test the first 5 chars.
}

function testPad() {
  let str = 'x'

  str.padStart(5, 'ab') // ababx
  str.padStart(4, 'ab') // abax

  'xxx'.padStart(1, 'ab') // xxx
  str.padStart(3, 'abcdefg') // abx, 超出则取前部字符

  str.padEnd(5, 'ab') // xabab
  str.padEnd(4, 'ab') // xaba

  '1'.padStart(4, '0') // 0001
  '09-12'.padStart(10, 'YYYY-MM-DD') // YYYY-09-12
}

function testTemplate() {
  let str = `
    Hello,
    my name is Tom.
  `
  console.log(str)
}

function main() {
  testUnicode()

  testContains()

  testPad()

  testTemplate()

  console.log('Done')
}

module.exports = main
