/**
 * 二分查找
 */
const binary_search = function (sourceArr, p, q, target) {
  if (p > q) return -1;
  const mid = Math.floor((q + p) / 2);

  if (sourceArr[mid] > target) {
    return binary_search(sourceArr, p, mid - 1, target);
  } else if (sourceArr[mid] < target) {
    return binary_search(sourceArr, mid + 1, q, target);
  } else {
    return mid;
  }
}

const binarySearch = function (arr, target) {
  return binary_search(arr, 0, arr.length - 1, target);
}
