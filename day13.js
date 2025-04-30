async function sleep(millis) {
  return new Promise (resolve=> setTimeout(resolve, millis));
}//returns undefined because it was not told what to return after the delay. For the challenge it's okay.

async function sleep(millis) {
  return new Promise (resolve=> setTimeout(()=>resolve("Done sleeping"), millis));//now it returns the value "Done sleeping".
} 
const callingFunction = async () => {
  const sleepFn = await sleep(100);
  console.log(sleepFn);
}

callingFunction();
