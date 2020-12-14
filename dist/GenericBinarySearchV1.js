"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringComparison = exports.numberComparison = exports.binarySearch = void 0;
function binarySearch(list, value, compareF) {
    // first index in array
    let first = 0;
    // last index in array
    let last = list.length - 1;
    let middle;
    while (first <= last) {
        middle = Math.floor((first + last) / 2);
        const compareResult = compareF(list[middle], value);
        if (compareResult > 0) {
            // value is in right part of list
            last = middle - 1;
        }
        else if (compareResult < 0) {
            // value is in left part of list
            first = middle + 1;
        }
        else {
            return middle;
        }
    }
    return undefined;
}
exports.binarySearch = binarySearch;
function numberComparison(left, right) {
    return left - right;
}
exports.numberComparison = numberComparison;
function stringComparison(left, right) {
    if (left < right) {
        return -1;
    }
    if (left > right) {
        return 1;
    }
    // names are equal
    return 0;
}
exports.stringComparison = stringComparison;
//# sourceMappingURL=GenericBinarySearchV1.js.map