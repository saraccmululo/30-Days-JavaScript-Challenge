var chunk = function(arr,size) {
  let result=[];
  for(let i=0; i< arr.length; i=i+size) {
    const subArray= arr.splice(i, i+size)
    result.push(subArray);
  }
  return result
}

console.log (chunk([1, 2, 3, 4, 5], 2));