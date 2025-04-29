
function wrapper(a, b, c) {
  let called = false;
    return function fn() {
      if (!called) {
        called = true;
      return a + b + c;
      } else {
      return undefined
    }
   } ;
}

const call = wrapper(1,2,3)
console.log(call());
console.log(call());//if you want to get "undefined" as a result, you need to call THE SAME function twice - you have to store the closure in a separate variable and then call that variable again.
console.log(wrapper(1,2,3)()); //it uses two parentheses to call a closure function directly. But the result will be always 6 because the closure is brand new everytime.


    
//OFFICIAL ASWER IS BELOW:

function once(fn) {
  let called=false;
    return function inner(...args) {
      if(!called){
        called=true;
        return fn(...args)
      } else {
        return undefined
      }
    };
}

function add (a,b,c) {
  return a+b+c;
}

const callFn=once(add);
console.log (callFn(1,2,3));
console.log (callFn(2,3,6));