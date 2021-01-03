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
  delete() {

  }
  genetateLinkedList() {
    this.sourceArray.forEach(item => {
      this.insertToLast(item)
    })
  }
  // 单链表反转
  reverseList() {

  }
  // 删除链表倒数第n个节点
  removeNnodes() {

  }
  // 求链表的中间节点
  listMiddleNodes() {

  }
  // 链表中环的检测
  hasCircle() {

  }
  // 两个有序链表的合并
  mergeOrderedLinkedList(listA, listB) {

  }
}

var arr = [1,2,3,4,5]
var l = new LinkedList(arr);
console.log(l);
