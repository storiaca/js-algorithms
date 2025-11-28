/**
 * productOfArray
Write a function called productOfArray which 
takes in an array of numbers and returns the product of them all.
 */

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


function productOfArray(arr) {
    let result = 1
    if(arr.length === 0) {
        return 1
    }

    for(let i = 0; i < arr.length; i++) {
        result *= arr[i]
    }

    return result;
}

productOfArray([1,2,3,10])