import { ISortable } from './ISortable';

export class NumberGroup implements ISortable {
  constructor(data: number[]) {
    this.data = data;
  }

  data: number[];

  get length(): number {
    // logic here
  };

  compare(leftPos: number, rightPos: number): boolean {
    // logic here
  }

  swap(left: number, right: number): void {
    // logic here
  }
}
