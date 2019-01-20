// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

function basicUsage() {
  let str = 'Hello Hello World'

  let regex = /Hello/
  regex.test(str) // true

  // String.search() is similar to RegExp.test()
  regex = /Hello/
  str.search(regex) // 0

  ///

  let result
  regex = /Hello/g // RexExp.test will update lastIndex, so create new one here.
  while((result = regex.exec(str))) { // return null if not found.
    console.log('Found ' + result[0] + ' at ' + result.index)
  }
  
  // Prefer to use String.match(), but not RegExp.exec()
  regex = /Hello/g
  result = str.match(regex) // return Array of found result or null if not found.

  ///

  str.replace(/Hello/g, 'Hi') // 'Hi Hi World', str will NOT be modified.

  str.split(regex) // ["", "Hello", "Hello", " World"] Note: 'Hello' is also in result.

  regex = /(\w+)\s(\w+)/
  'John Smith'.replace(regex, '$2 $1') // 'Smith John'
}

function lookAheadBehind() {
  let str = '<html>Hello World</html>'
  let regex = /(?<=\<html\>).*(?=\<\/html\>)/

  let result = str.match(regex) 
  // result[0] == 'Hello World'
}

function testGroup() {
  let str = '2019-01-10'
  let regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

  let { year, month, day } = str.match(regex).groups
  // year == 2019
  str.replace(regex, '$<year>/$<month>/$<day>')
  // 2019/01/10
  
  dconsole.log()
}

function main() {
  basicUsage()

  lookAheadBehind()

  testGroup()

  console.log('Done')
}

main()

module.exports = main
