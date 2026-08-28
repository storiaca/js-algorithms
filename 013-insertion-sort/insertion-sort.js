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

console.log(insertionSort(a));
// output   [1, 2, 3, 4, 5, 6, 12, 14, 77]
function linearSearch(arr, num) {
  let br = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === num) return (br = i);
  }

  return br;
}

linearSearch([4, 6, 7, 89, 23], 9);
