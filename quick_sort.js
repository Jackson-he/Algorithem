/**
 * 快速排序：（从小到大排序）
 * 思路：分治思想，从数组中选择一个区分点，将小于它的数放在左边，大于它的数放在右边，不断细分，重复这个过程，直至不可再分，数组便已排好序
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(1)
 */
function quickSort (array) {
  quick_sort_c(array, 0, array.length - 1);
}

function quick_sort_c (array, l, r) {
  if (l >= r) return
  const pivot = partion(array, l, r);
  
  quick_sort_c(array, l, pivot - 1);
  quick_sort_c(array, pivot + 1, r);
}

function partion(array, l, r) {
  const p = r;
  let i = l;
  let j = l;
  while (j < r) {
    if (array[j] < array[p]) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
    j++;
  }
  [array[i], array[p]] = [array[p], array[i]];
  return i;
}