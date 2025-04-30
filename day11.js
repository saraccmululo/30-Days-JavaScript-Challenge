function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
