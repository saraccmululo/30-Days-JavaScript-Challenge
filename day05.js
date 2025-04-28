//Arrays

//function plusOne (arr) {
 // let returnedArray=[];

 // for (let i=0; i< arr.length; i++){
 //   returnedArray [i] = arr[i]+1
 // }
 // return returnedArray;
//}
//console.log(plusOne([1,2,3])) ====> it does only one job (adding +1). That works for "plus one", but it won't work if they give you a different function.



//The solution below accepts any function that wants to tranform each item of the array:

function map (arr, fn){
  let returnedArray = [];
  for(let i=0; i<arr.length; i++){
      returnedArray[i]=fn(arr[i], i);
  }
  return returnedArray
}

function plusOne(n, i){
  return n+=1
}

console.log (map ([1 , 2, 3], plusOne));