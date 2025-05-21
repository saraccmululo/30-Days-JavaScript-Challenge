class Calculator {
  constructor(value){
    this.result=value;  
  }
  add(value){
   this.result= this.result + value;  return this; //Here, take the whole object calculator again (this) so you can keep calling more methods on it."
  };
  subtract (value) {
     this.result -=value;
     return this;//return this is the same as returning obj, so JavaScript can do obj.subtract(3) next, and so on. 💪
  };
  multiply (value) {
     this.result *=value;
     return this;
  };
  divide (value) {
    if (value===0) {
      throw new Error ("Division by zero is not allowed");
    }
     this.result /=value;
     return this;
  };
  power (value) {
     this.result**=value;
     return this;
  }
  getResult(){
    return this.result;
  }
}

const obj= new Calculator(10).add(5).subtract(7). getResult();
console.log(obj)