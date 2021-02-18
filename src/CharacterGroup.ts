import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
  constructor(data: string) {
    this.data = data;``
  }

  data: string;

  get length(): number {
    // logic here
  }

  compare(leftPos: number, rightPos: number): boolean {
    // logic here
  }

  swap(left: number, right: number): void {
    // logic here
  }
}