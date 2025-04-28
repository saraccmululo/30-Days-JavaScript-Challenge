function filter (arr, fn) {
  let filteredArray=[];

  for(let i=0; i<arr.length; i++){
    if(fn(arr[i], i)){
      filteredArray.push(arr[i])
    }
  }
  return filteredArray;
}

function greaterThan10(n) {
  return n>10
}

console.log(filter([0,10,20,30], greaterThan10))