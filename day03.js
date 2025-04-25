
function expect (val1) {
  return {
      toBe: (val2) => {
          if (val1===val2) {
              return true
          } else {
              throw Error ('Not Equal')
          }
      },
      notToBe:(val2) => {
          if(val1!==val2) {
              return true
          } else {
              throw Error ('Equal')
          }
          
      }
  }
}

const result = expect(5).toBe(5);
const result1 = expect(5). notToBe(6);