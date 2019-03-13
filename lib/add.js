function add(num1, num2) {
  // 实现该函数
  num1 = num1.split('')
  num2 = num2.split('')
  let result = ''
  let temp = 0
  while (num1.length || num2.length || temp) {
    temp += Number(num1.pop() || 0) + Number(num2.pop() || 0)
    result = (temp % 10) + result
    temp = temp > 9
  }
  return String(result)
}

module.exports = add
