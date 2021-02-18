import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
  constructor(data: string) {
    this.data = data;``
  }

  data: string;

  get length(): number {
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    let leftString = this.data.charAt(leftPos).toLowerCase();
    let rightString = this.data.charAt(rightPos).toLowerCase();
    if (leftString.charCodeAt(0) > rightString.charCodeAt(0))
      return true;
    else
      return false;
  }

  swap(left: number, right: number): void {
    let tempArr = [];
    for (let i = 0; i < this.data.length; i++) {
      tempArr.push(this.data.charAt(i));
    }
    let tempLeft = tempArr[left];
    let tempRight = tempArr[right];
    tempArr[left] = tempRight;
    tempArr[right] = tempLeft;
    this.data = tempArr.join('');
  };
}