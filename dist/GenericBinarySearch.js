"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringComparison = exports.numberComparison = exports.binarySearch = void 0;
const signs = {
    less: '<',
    larger: '>',
    equal: '='
};
// eslint-disable-next-line @typescript-eslint/ban-types
function binarySearch(list, value, compareF) {
    // initial value for position
    let position = -1;
    // first index in array
    let first = 0;
    // last index in array
    let last = list.length - 1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (compareF(list[middle], value, signs.equal)) {
            found = true;
            position = middle;
        }
        else if (compareF(list[middle], value, signs.larger)) {
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
function numberComparison(numberLeft, numberRight, sign) {
    switch (sign) {
        case signs.equal:
            if (numberLeft === numberRight) {
                return true;
            }
            else {
                return false;
            }
            break;
        case signs.less:
            if (numberLeft < numberRight) {
                return true;
            }
            else {
                return false;
            }
            break;
        case signs.larger:
            if (numberLeft > numberRight) {
                return true;
            }
            else {
                return false;
            }
            break;
        default:
            return undefined;
            break;
    }
}
exports.numberComparison = numberComparison;
function stringComparison(numberLeft, numberRight, sign) {
    switch (sign) {
        case signs.equal:
            if (numberLeft === numberRight) {
                return true;
            }
            else {
                return false;
            }
            break;
        case signs.less:
            if (numberLeft < numberRight) {
                return true;
            }
            else {
                return false;
            }
            break;
        case signs.larger:
            if (numberLeft > numberRight) {
                return true;
            }
            else {
                return false;
            }
            break;
        default:
            return undefined;
            break;
    }
}
exports.stringComparison = stringComparison;
//# sourceMappingURL=GenericBinarySearch.js.map