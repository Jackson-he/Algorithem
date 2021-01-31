/**
 * 二分查找: 在一个从小到大的有序数组中查找值等于给定值的位置
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

/**
 * 二分查找：在一个从小到大的有序数组中查找第一个值等于给定值的位置
 */
const binary_search_first_point = function (sourceArr, p, q, target) {
  if (p > q) return -1;
  let mid = Math.floor((q + p) / 2);

  if (sourceArr[mid] > target) {
    return binary_search_first_point(sourceArr, p, mid - 1, target);
  } else if (sourceArr[mid] < target) {
    return binary_search_first_point(sourceArr, mid + 1, q, target);
  } else {
    while (sourceArr[mid - 1] === target) {
      mid--;
    }
    return mid;
  }
}

const binarySearchFirstPoint = function (arr, target) {
  return binary_search_first_point(arr, 0, arr.length - 1, target);
}

/**
 * 二分查找：在一个从小到大的有序数组中查找最后一个值等于给定值的位置
 * 可以用递归或者非递归实现，此处使用非递归方法
 */
const binary_search_last_point = function (sourceArr, target) {
  let p = 0;
  let q = sourceArr.length - 1;

  while (p <= q) {
    let mid = Math.floor((q + p) / 2);
    if (sourceArr[mid] > target) {
      q = mid - 1;
    } else if (sourceArr[mid] < target) {
      p = mid + 1;
    } else {
      if (sourceArr[mid + 1] === target && mid !== sourceArr.length - 1) {
        p = mid + 1;
      } else {
        return mid;
      }
    }
  }
  return -1;
}

/**
 * 二分查找：在一个从小到大的有序数组中查找最后一个值小于等于给定值的位置
 * 可以用递归或者非递归实现，此处使用非递归方法
 */
const binary_search_last_small = function (sourceArr, target) {
  let p = 0;
  let q = sourceArr.length - 1;

  while (p >= q) {
    let mid = Math.floor((q + p) / 2);
    if (sourceArr[mid] > target) {
      q = mid - 1;
    } else {
      if (sourceArr[mid + 1] <= target && mid !== sourceArr.length - 1) {
        p = mid + 1;
      } else {
        return mid;
      }
    }
  }
  return -1;
}