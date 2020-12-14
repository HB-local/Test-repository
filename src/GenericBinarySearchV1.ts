export function binarySearch<T>(
  list: T[],
  value: T,
  compareF: (left: T, right: T) => number
): number | undefined {
  // first index in array
  let first = 0;

  // last index in array
  let last: number = list.length - 1;

  let middle: number;

  while (first <= last) {
    middle = Math.floor((first + last) / 2);

    const compareResult = compareF(list[middle], value);
    if (compareResult > 0) {
      // value is in right part of list
      last = middle - 1;
    } else if (compareResult < 0) {
      // value is in left part of list
      first = middle + 1;
    } else {
      return middle;
    }
  }

  return undefined;
}

export function numberComparison(left: number, right: number): number {
  return left - right;
}

export function stringComparison(left: string, right: string): number {
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  // names are equal
  return 0;
}
