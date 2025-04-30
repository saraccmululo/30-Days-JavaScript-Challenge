const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 20);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(5), 60);
});

const addTwoPromises = async function (promise1, promise2) {
  try {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    const sum = result1 + result2;
    return sum;
  } catch (error) {
    throw error;
  }
};

//How to call addTwoPromises function in vanilla JS:
async function callingFunction() {
    const sum = await addTwoPromises(promise1, promise2);
    console.log(sum);
}
callingFunction();
