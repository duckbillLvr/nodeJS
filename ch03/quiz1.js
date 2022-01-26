console.log('1')
setTimeout(() => {
  console.log('4')
}, 1000) // 1초 뒤에 출력

setTimeout(() => {
  console.log('2')
}, 0) // call back을 생각

console.log('3')
