function createCounter (n) {
  return function counter () {
      return n++;
  }
}

const result = createCounter(10);
console.log(result());
console.log(result());
console.log(result());