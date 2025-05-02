var cancellable = function(fn, args, t, cancelTimeMs) {
  fn(...args); 
 
 const intervalId = setInterval(()=>fn(...args), t);
  
  const cancelFn =()=> clearInterval(intervalId);

  setTimeout(()=>cancelFn, cancelTimeMs);
  return cancelFn;
}

function multiply(x) {
  return x * 2;
}

const cancel=cancellable(multiply, [4], 35, 190);
cancel()//if the caller wants to cancel the function manually, it needs to call "cancel()"