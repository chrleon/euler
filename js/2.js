// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const max = 4000000

let isEven = (n) =>  n%2;

let fibonacci = () => {
  let fibo = [{current: 1, prev: 0}];
  let next = 0;
  for (let i = 0; i < 100; i++) {
    next = fibo[i].prev + fibo[i].current;
    fibo.push({current :next, prev: fibo[i].current})
  }

  //return fibo;
}
fibonacci();