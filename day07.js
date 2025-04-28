function reduce (nums, fn, initialValue) {
  let val=initialValue
  for (let i=0; i<nums.length; i++) {
    val=fn(val, nums[i])
  }
  return val
}

function sum (accum, n) {
  return n + accum;
}

console.log(reduce([1,2,3,4], sum, 0));
console.log(reduce([1,2,3,4], sum, 100));
console.log(reduce ([], sum, 25));