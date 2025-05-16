var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    // Go through each item in the array and clean it up
    return obj
      .map(compactObject) // compact each element (in case it's an object)
      .filter(Boolean);   // remove falsy values
  } else if (obj !== null && typeof obj === 'object') {
    // It's an object (not null or array)
    const result = {};
    for (const key in obj) {
      const value = compactObject(obj[key]); // clean nested values
      if (Boolean(value)) {
        result[key] = value; // only add truthy values
      }
    }
    return result;
  } else {
    // Base case: return the value if it's truthy
    return obj;
  }
}

//Calling the function
const input = {
  a: null,
  b: [false, 1, "", { x: 0, y: 2 }],
  c: {
    d: 0,
    e: "hello",
    f: {
      g: "",
      h: "world"
    }
  }
};

const output = compactObject(input);
console.log(output);

//Step-by-step Plan:
/* Check if the value is an array
→ If it is, create a new array and only keep the values that are truthy, and also check if those values are nested objects/arrays that need cleaning.

Check if the value is an object (but not an array)
→ Create a new object and only keep the key-value pairs where the value is truthy, and if it's another object/array, clean that too.

If it’s just a value (not object or array)
→ Return it only if it’s truthy.

🧪 JavaScript tools you’ll use:
Array.isArray() – to check if something is an array.

typeof – to check if something is an object.

Boolean(value) or just if (value) – to check if it's truthy.

Recursion – the function will call itself for nested stuff. */

