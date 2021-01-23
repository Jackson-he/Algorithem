/**
 * 冒泡排序：（从小到大排序）
 * 思路：遍历一组数据，从前往后两两比较，比自己小则交换位置，一轮遍历下来会将最大的元素放在末尾，依次进行多轮循环遍历即可完成排序。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
function bubleSort (array) {
  for (let i = 0; i < array.length; i++) {
    let flag = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        flag = true;
        /**
         * 利用中间变量交换
         */
        // const swap = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = swap;
        /**
         * 利用数组结构交换
         */
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (!flag) return array;
  }
  return array;
}
/**
 * 插入排序：（从小到大排序）
 * 思路：遍历一组数据，数据分为两个区间，左侧为已排序区间，右侧为未排序区间，每次从未排序区间取出一个数放在已排序区间合适的位置，依次进行多轮循环遍历即可完成排序。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
function insertionSort (array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  }
  return array;
}
/**
 * 选择排序：（从小到大排序）
 * 思路：遍历一组数据，数据分为两个区间，左侧为已排序区间，右侧为未排序区间，每次从未排序区间取出一个最小的数放在已排序区间合适的末尾，依次进行多轮循环遍历即可完成排序。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
function chooseSort (array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minkey = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minkey]) {
        minkey = j;
      }
    }
    [array[i], array[minkey]] = [array[minkey], array[i]];
  }
  return array;
}