console.log('1')
setTimeout(() => {
  console.log('4')
}, 1000) // 1�� �ڿ� ���

setTimeout(() => {
  console.log('2')
}, 0) // call back�� ����

console.log('3')
