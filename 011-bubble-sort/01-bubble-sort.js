/**
 * Bubble sort
 *
 */
// function numberCompare(num1, num2) {
//   return num1 - num2;
// }

// [13, 45, 4, 89, 63, 2, 36, 28, 1].sort(numberCompare);

// function compareByLen(str1, str2) {
//     return str1.length - str2.length;
// }

// ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)

/**
 * 
 * @param [numbers] arr 
 * @returns Sorted array
 */
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP!
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

bubbleSort([37, 45, 29, 8])