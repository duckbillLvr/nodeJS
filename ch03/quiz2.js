// @ts-nocheck
// ���� 1
// setInterval(() => {
//   console.log('Hey!')
//   while (true) {}
// }, 1000)
// ������ ���� ���� �Ƿ� �ѹ��� ����

// ���� 2
let i = 1
setInterval(() => {
  i = 1
  console.log('Hey!')
  while (i !== 5) {
    console.log(i)
    i+=1;
  }
}, 1000)
