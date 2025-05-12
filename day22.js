Array.prototype.last = function() {
  return this.length>0? this[this.length-1] : -1
};

console.log([10, 20, 30].last());
console.log([].last());  