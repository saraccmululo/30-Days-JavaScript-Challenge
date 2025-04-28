//Function Transformations

function compose (fn) {
    if(fn.length===0){
      return function (x) {
        return x;
      }
    }
    return function(x) {
     return fn.reduceRight((val,fn)=>fn(val), x) 
     //reduce.Right() combine all the functions from right to left.It takes each function in the array and applies it to a value.
     // x is the starting value (the number you pass into the function).
    };
}

const addOne = (x) => x+1;
const multiplyPerN = (x) => x*x;
const double =(x) => x*2;

const composeFunction = compose([addOne, multiplyPerN, double]);
console.log(composeFunction(4));