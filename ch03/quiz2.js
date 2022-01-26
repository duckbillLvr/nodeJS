// @ts-nocheck
// 실행 1
// setInterval(() => {
//   console.log('Hey!')
//   while (true) {}
// }, 1000)
// 리턴이 되지 않으 므로 한번만 실행

// 실행 2
let i = 1
setInterval(() => {
  i = 1
  console.log('Hey!')
  while (i !== 5) {
    console.log(i)
    i+=1;
  }
}, 1000)
