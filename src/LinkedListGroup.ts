import { ISortable } from "./ISortable";

class Node {
  next: Node | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;

  // Create Node out of data and attach to end of list
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // Should return number of Nodes in List
  get length(): number {
    // implement this part yourself
    let len = 0;

    for (let i = 0; i >= 0; i++) {
      len++;
      if (this.at(i).next == null)
      break;
    }
    return len;
  }

  // Convenience method that returns a Node at a given index
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Error: Index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Error: Index out of bounds');
  }

  compare(leftPos: number, rightPos: number): boolean {
    // Implement this part yourself
    if (this.at(leftPos).data > this.at(rightPos).data)
        return true;
    else
        return false;
  }

  swap(leftPos: number, rightPos: number): void {
    // Implement this part yourself
    let tempL = this.at(leftPos).data;
    let tempR = this.at(rightPos).data;

    this.at(leftPos).data = tempR;
    this.at(rightPos).data = tempL;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
