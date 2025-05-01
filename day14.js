const cancellable = function(fn, args, t) {
  const timeoutId = setTimeout(() =>fn(...args),t);
  
  const cancelFn=() => clearTimeout(timeoutId);
  return cancelFn
}

function multiply (x) {
  return x * 5 
}

const cancel=cancellable(multiply, [2], 3000);
console.log(cancel)