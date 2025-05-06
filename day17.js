var TimeLimitedCache = function() {
  this.cache = new Map();
}

TimeLimitedCache.prototype.set = function(key, value, duration) {
  const currentTime=Date.now();
  const expirationTime = currentTime + duration;
  const exists = this.cache.has(key) && this.cache.get(key).expiresAt > currentTime;
  this.cache.set(key, { value: value, expiresAt: expirationTime });

  return exists;
}
TimeLimitedCache.prototype.get = function(key) {
  const currentTime = Date.now();
  const item = this.cache.get(key);
  
  // If the key exists and has not expired, return its value
  if (item && item.expiresAt > currentTime) {
    return item.value;
  }
  // If the key is expired or doesn't exist, return -1
  return -1;
};
TimeLimitedCache.prototype.count = function() {
  const currentTime = Date.now();
  let count = 0;
  
  // Loop through all keys and count the non-expired ones
  this.cache.forEach((value, key) => {
    if (value.expiresAt > currentTime) {
      count++;
    }
  });
  
  return count;
};