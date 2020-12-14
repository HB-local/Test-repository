"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
//export function binarySearch<T>(list:T[],value:T,compareF:Function):number|undefined{
function binarySearch(list, value) {
    //initial value for position
    let position = -1;
    //first index in array
    let first = 0;
    //last index in array
    let last = list.length - 1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] === value) {
            found = true;
            position = middle;
        }
        else if (list[middle] > value) {
            // value is in right part of list
            last = middle - 1;
        }
        else {
            // value is in left part of list
            first = middle + 1;
        }
    }
    if (found) {
        return position;
    }
    else {
        return undefined;
    }
}
exports.binarySearch = binarySearch;
//# sourceMappingURL=BinarySearch.js.map