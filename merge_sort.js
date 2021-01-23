/**
 * 归并排序：（从小到大排序）
 * 思路：分治思想，将一个大数组细分为多个小数组，小数组合并为大数组的过程中排序
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 */
function mergeSort (array) {
  merge_sort(array, 0, array.length - 1);
}

function merge_sort (array, l, r) {
  if (l >= r) return;
  const mid = Math.floor((l + r) / 2);
  merge_sort(array, l, mid);
  merge_sort(array, mid + 1, r);
  merge(array, l, mid, r);
}

function merge (array, l, mid, r) {
  const tempArr = [];
  let i = l;
  let j = mid + 1;

  while (i <= mid && j <= r) {
    if (array[i] <= array[j]) {
      tempArr.push(array[i++]);
    } else {
      tempArr.push(array[j++]);
    }
  }

  // 将剩下的数组装进来
  if (i <= mid) {
    i === mid ? tempArr.push(array[i]) : tempArr.push(...array.slice(i, mid));
  } else {
    j === r ? tempArr.push(array[j]) : tempArr.push(...array.slice(j, r));
  }
  
  // 将tempArr拷贝到原数组中
  for (let index = 0; index < tempArr.length; index++) {
    array[l + index] = tempArr[index];
  }
}
