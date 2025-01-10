class LinkedList {
  head = null;

  append(value) {
    const tail = new Node(value);
    if (this.size() < 1) {
      this.prepend(value);
    } else {
      const penultimateNode = this.at(this.size() - 1);
      penultimateNode.nextNode = tail;
    }
  }

  prepend(value) {
    this.head = new Node(value, this.getHead());
  }

  size(node = this.head) {
    if (node === null) {
      return 0;
    }
    return 1 + this.size(node.nextNode);
  }
  getHead() {
    return this.head;
  }
  tail(node = this.head) {
    if (this.size() < 1) {
      return -1;
    }
    if (node.nextNode === null) {
      return node;
    }
    return this.tail(node.nextNode);
  }
  // Zero based index
  at(index, node = this.head) {
    if (this.size() < 1) {
      return null;
    }
    let i = 0;
    let currentNode = node;
    while (currentNode !== null) {
      if (i === index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      i++;
    }
    return -1;
  }
  pop() {
    if (this.size() < 1) {
      return "Nothing to pop";
    }

    if (this.size() === 1) {
      this.head = null;
      return;
    }

    const penultimateNode = this.at(this.size() - 2);
    penultimateNode.nextNode = null;
  }
  contains(val) {
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).value === val) {
        return true;
      }
    }
    return false;
  }
  find(val) {
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).value === val) {
        return i;
      }
    }
    return null;
  }
  toString() {
    if (this.size() < 1) {
      return "The list is empty";
    }
    let linkedList = "";
    for (let i = 0; i < this.size(); i++) {
      linkedList += `(${this.at(i).value}) -> `;
    }
    linkedList += this.tail().nextNode;
    return linkedList;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("lizard");
console.log(list.toString());
