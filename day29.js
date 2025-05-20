/* What You Need to Build:
You're building a class that can:
1)Store an array of integers.
2)Add itself to another object and return the total sum of both arrays => .valueOf() method.
3)Convert itself to a string that looks like [1,2,3]. => String(obj) method.*/

class ArrayWrapper {
  constructor(nums) { //constructor is a method that create the object’s properties inside the new object.
    this.arr = nums; // Create a property called arr, and assign nums (that came from the argument) as its value. 
  }
  valueOf() {
    return this.arr.reduce((sum, num)=> sum + num,0);
  };
  toString() {
    return `[${this.arr.join(",")}]`;
  };
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);        // 👉 10
console.log(String(obj1));       // 👉 "[1,2]"
console.log(String(obj2));       // 👉 "[3,4]"

