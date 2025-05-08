var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    if (functions.length === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      fn()
        .then(value => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === functions.length) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};


