/**
 * Bubble sort
 *
 */
function numberCompare(num1, num2) {
  return num1 - num2;
}

[13, 45, 4, 89, 63, 2, 36, 28, 1].sort(numberCompare);

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
