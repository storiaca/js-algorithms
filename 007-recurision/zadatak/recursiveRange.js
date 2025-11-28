/**
 * recursiveRange
Write a function called recursiveRange which accepts 
a number and adds up all the numbers from 0 
to the number passed to the function 
 */
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   let result = 0

    if(num === 1) return 1

    for (let i = num; i > 0; i--) {
        result += i
    }

    return result;
}

recursiveRange(10)

// sa rekurzijom
function recursiveRange(num){
   let result = 0

    if(num === 1) return 1

    result = num + recursiveRange(num - 1)

    return result;
}