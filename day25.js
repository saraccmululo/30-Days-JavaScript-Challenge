var join = function(arr1, arr2) {
  const map = new Map();

  function mergeToMap(arr) {
    for (const obj of arr) {
      const { id, ...rest } = obj; 
      if (!map.has(id)) {
        map.set(id, { id, ...rest });
      } else {
        const existing = map.get(id);
        map.set(id, { ...existing, ...rest });
      }
    }
  }

  mergeToMap(arr1);
  mergeToMap(arr2);

  const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);

  return joinedArray;
 
};