"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
function compare(a, b) {
    if (a.a < b.a) {
        return -1;
    }
    if (a.a > b.a) {
        return 1;
    }
    // a must be equal to b
    return 0;
}
exports.compare = compare;
//# sourceMappingURL=SortTest.js.map