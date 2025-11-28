/*
power
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
- do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    let result = 1;
    if(exp === 0) return 1;
    
   for (let i = 0; i < exp; i++) {
      result *= base
    }
    return result;
    
}

power(2,4)

// recursive solution
function powerRecursive(base, exponent) {
  // Base case: any number to the power of 0 is 1
  if (exponent === 0) {
    return 1;
  }
  // Recursive step: multiply the base by the result of itself with a smaller exponent
  else {
    return base * powerRecursive(base, exponent - 1);
  }
}

// Example usage:
// console.log(powerRecursive(2, 3)); // Output: 8
