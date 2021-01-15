/**
 * 单向链表
 */

class Nodes {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor (source = []) {
    this.sourceArray = source;
    this.root =  new Nodes('root')
    this.genetateLinkedList();
  }
  insertToLast(val) {
    const newNodes = new Nodes(val);

    let current = this.root;
    while (current.next !== null) {
      current = current.next
    }

    current.next = newNodes;
  }
  // 删除指定节点
  delete(val) {
    let current = this.root;
    let prev = current;

    while (current !== null && current.value !== val) {
      prev = current;
      current = current.next;
    }

    if (current !== null && current.value === val) {
      prev.next = current.next;
      current = null;
    } else {
      throw new Error('The given nodes does not exists')
    }
  }
  genetateLinkedList() {
    this.sourceArray.forEach(item => {
      this.insertToLast(item)
    })
  }
  /**
   * 单链表反转
   * 思路：一次遍历，遇到一个节点就把这个节点从当前节点提到头部节点之后
   * 方法：双指针，prev节点永远指向第一个节点，动态移动current节点
   */
  reverseList() {
    if (this.root.next === null || this.root.next.next === null) return;

    const insertToTheFirst = (nodes) => {
      const firstNodes = this.root.next;
      nodes.next = firstNodes;
      this.root.next = nodes;
    }

    let prev = this.root.next;
    let current = prev.next;

    while (current !== null) {
      let next = current.next;
      // 当前节点插入头部
      insertToTheFirst(current);
      // 删除当前节点
      prev.next = next;
      // 移动当前指针
      current = prev.next;
    }
  }
  /**
   * 删除链表倒数第n个节点
   * 思路：一次遍历，双指针保持固定距离前行，前一个指针到达终点时，后一个指针刚好是倒数第n个节点，同时记录后一个指针的前一个节点，便于删除操作
   * 方法：双指针，prev节点永远指向第一个节点，动态移动current节点
   */
  removeNnodes(n) {
    let nextPoint = this.root;
    let prevPoint = this.root;
    let nextPrevPoint = this.root;
    let i = 0;
    
    while (prevPoint !== null) {
      prevPoint = prevPoint.next;
      if (i < n) {
        i++;
      } else {
        nextPrevPoint = nextPoint;
        nextPoint = nextPoint.next;
      }
    }
    nextPrevPoint.next = nextPoint.next;
    nextPoint = null;
  }
  /**
   * 链表中环的检测
   * 思路：两个指针，一个快指针，一个慢指针，如果快指针能赶到慢指针，则说明存在环
   */ 
  hasCircle() {
    let fastPoint = this.head.next;
    let slowPoint = this.head.next;
    while (fastPoint === null && fastPoint.next !== null) {
      fastPoint = fastPoint.next.next;
      slowPoint = slowPoint.next;
      if (fastPoint === slowPoint) return true
    }
    return false;
  }
  // 两个有序链表的合并
  mergeOrderedLinkedList(listA, listB) {

  }
}

var arr = [1,2,3,4,5]
var l = new LinkedList(arr);
console.log(l);
