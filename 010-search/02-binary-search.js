/**
 * Binary Search
 *
 * - Binary search is much faster form of search
 * - Rather than eliminating one element at a time, you can elimante half of the remaining elments at a time
 * - Binary search only work on sorted arrays!
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://www.topcoder.com/thrive/articles/Binary%20Search
 */
function binarySearch(arr, elem) {
  // add whatever parameters you deem necessary - good luck!
  // let start = 0;
  // let end = arr.length - 1;
  // let middle = Math.floor((start + end) / 2)

  // while(arr[middle] !== elem && start <= end) {
  //   if(elem < arr[middle]) {
  //     end = middle - 1
  //   } else {
  //     start = middle + 1
  //   }
  //   middle = Math.floor((start + end) / 2)
  // }

  // if(arr[middle] == elem) {
  //   return middle
  // }

  // return -1

  // shorter
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}

binarySearch([1, 2, 3, 4, 5], 2);
