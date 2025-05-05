//You're asked to write a function that wraps a promise and adds a time limit to it. If the promise doesn’t settle within the given time (in ms), the wrapper should reject with the string "Time Limit Exceeded".

var timeLimit = function(fn, t) {
  return async function(...args) {
      // Create a timeout promise that rejects after t milliseconds
      const timeout = new Promise((_, reject) =>
          setTimeout(() => reject("Time Limit Exceeded"), t)
      );

      // Race the actual function against the timeout
      return Promise.race([
          fn(...args), 
          timeout     
      ]);
  };
};
//How to call this function:
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded"

const fast = timeLimit((t) => new Promise(res => setTimeout(() => res("Done"), t)), 200);
fast(100).then(console.log); // "Done"
