function createCounter (init) {
  let n=init;
  return {
    increment:() => n=n+1,
    reset:() => n=init,
    decrement: () => n=n-1
  }
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());