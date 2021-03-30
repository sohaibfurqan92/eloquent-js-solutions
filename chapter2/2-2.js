// EloquentJS: Chapter 2
// 2.1 - FizzBuzz

// Version 1
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// Version 2
let Fizz = 'Fizz';
let Buzz = 'Buzz';
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log(Fizz + Buzz);
    }
    console.log(Fizz);
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(Buzz);
  } else {
    console.log(i);
  }
}
