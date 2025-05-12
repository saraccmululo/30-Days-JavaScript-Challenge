Array.prototype.groupBy = function(fn) {
  const result = {};
  this.forEach(item=> { //For each item in the array, you're calling fn(item).
    const key = fn(item);//The result will be a key string that will be used to group the items.
    if(!result[key]) {//If it's the first time u see this key, create an empty list for it.
      result[key] = [];
    }
    result[key].push(item);
  })
  return result
}

//calling the function:
const numbers = [1, 2, 3, 4, 5, 6];
const grouped = numbers.groupBy(num => num % 2 === 0 ? 'even' : 'odd');
console.log(grouped);// Output: { odd: [1, 3, 5], even: [2, 4, 6] }
