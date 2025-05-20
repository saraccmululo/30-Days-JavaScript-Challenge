var isEmpty = function(obj) {
  const isArray = Array.isArray(obj);
  const isObject = typeof obj === "object" && obj !== null;

    if (isArray){
        return obj.length===0
      }
    if(isObject) {
          return Object.keys(obj).length===0
        } 
    return false
};