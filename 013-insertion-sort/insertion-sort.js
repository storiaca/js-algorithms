/**
 * Insertion sort
 */

let a = [4, 5, 3, 2, 1, 12, 77, 6, 14];

function insertionSort() {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (a[j - 1] > a[j]) {
        let temp = a[j];
        a[j] = a[j - 1];
        a[j - 1] = temp;
      } else break;
    }
  }
  return a;
}

// Njegovo resenje sa var
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
