const signs = {
  less: '<',
  larger: '>',
  equal: '='
};

// eslint-disable-next-line @typescript-eslint/ban-types
export function binarySearch<T> ( list: T[], value: T, compareF: Function ): number | undefined {
  // initial value for position
  let position = -1;

  // first index in array
  let first = 0;

  // last index in array
  let last: number = list.length - 1;

  let found = false;
  let middle: number;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);

    if (compareF(list[middle], value, signs.equal)) {
      found = true;
      position = middle;
    } else if (compareF(list[middle], value, signs.larger)) {
      // value is in right part of list
      last = middle - 1;
    } else {
      // value is in left part of list
      first = middle + 1;
    }
  }

  if (found) {
    return position;
  } else {
    return undefined;
  }
}

export function numberComparison (
  numberLeft: number,
  numberRight: number,
  sign: '<' | '>' | '='
): boolean | undefined {
  switch (sign) {
    case signs.equal:
      if (numberLeft === numberRight) {
        return true;
      } else {
        return false;
      }
      break;
    case signs.less:
      if (numberLeft < numberRight) {
        return true;
      } else {
        return false;
      }
      break;
    case signs.larger:
      if (numberLeft > numberRight) {
        return true;
      } else {
        return false;
      }
      break;
    default:
      return undefined;
      break;
  }
}

export function stringComparison (
  numberLeft: string,
  numberRight: string,
  sign: '<' | '>' | '='
): boolean | undefined {
  switch (sign) {
    case signs.equal:
      if (numberLeft === numberRight) {
        return true;
      } else {
        return false;
      }
      break;
    case signs.less:
      if (numberLeft < numberRight) {
        return true;
      } else {
        return false;
      }
      break;
    case signs.larger:
      if (numberLeft > numberRight) {
        return true;
      } else {
        return false;
      }
      break;
    default:
      return undefined;
      break;
  }
}
