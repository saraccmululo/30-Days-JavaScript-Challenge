//Sorting the original array that was passed:
var sortBy = function(arr,fn) {
 return arr.sort((a,b)=>fn(a)-fn(b));
};


//calling function
fruits = ['banana', 'apple', 'cherry'];
const result = sortBy(fruits, word => word.length);
console.log(result); //['apple, 'banana', 'cherry']


//Sorting by function result:
var sortBy = function(arr, fn) {
  const sortedArr=[];
arr.forEach(item => {
  const result = fn(item);
  sortedArr.push(result);
});
sortedArr.sort((a,b)=> a-b);
return sortedArr
};