import {from} from 'rxjs/observable/from';

export function fibonacci(n) {
  if (n === -Infinity) return -Infinity;

  if (n === +Infinity) return +Infinity;

  if (n === 0) return 0;

  let A = (1 + Math.sqrt(5)) / 2;
  let B = (1 - Math.sqrt(5)) / 2;

  let res = Math.ceil((Math.pow(A, n) - Math.pow(B, n)) / Math.sqrt(5));

  if (res <= 0) res -= 1;

  return res;
}

export function* fibonacciGenerator(startingFrom) {
  let nM1 = fibonacci(startingFrom - 1);
  let nM0 = fibonacci(startingFrom);

  while (true) {
    let pM1 = nM1;
    nM1 = nM0;
    nM0 = nM0 + pM1;
    yield nM1;
  }
}

export function fibonacciObservable(startingFrom) {
    return from(fibonacciGenerator(startingFrom));
}
