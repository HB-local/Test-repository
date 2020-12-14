export interface IMyInterface {
  a: string;
}

export function compare(a: IMyInterface, b: IMyInterface): number {
  if (a.a < b.a) {
    return -1;
  }
  if (a.a > b.a) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
