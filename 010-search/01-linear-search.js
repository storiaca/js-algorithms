function linearSearch(arr, num) {
  let br = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === num) return (br = i);
  }

  return br;
}

linearSearch([4, 6, 7, 89, 23], 9);
