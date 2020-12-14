"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const BinarySearch_1 = require("../BinarySearch");
describe("ƒ binarySearch()", function () {
    //array of 0 elements
    it(`For array [] and sought-for value 5 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([], 5);
        chai_1.expect(result).to.equal(undefined);
    });
    it(`For array [] and sought-for value 0 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([], 0);
        chai_1.expect(result).to.equal(undefined);
    });
    //array of 1 element
    //first and last
    it(`For array [5] and sought-for value 5 should return position 0`, function () {
        const result = BinarySearch_1.binarySearch([5], 5);
        chai_1.expect(result).to.equal(0);
    });
    //undefined
    it(`For array [5] and sought-for value 1 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([5], 1);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [5] and sought-for value 7 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([5], 7);
        chai_1.expect(result).to.equal(undefined);
    });
    //array of 3 elements
    //first
    it(`For array [3,5,7] and sought-for value 3 should return position 0`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7], 3);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it(`For array [3,5,7] and sought-for value 7 should return position 2`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7], 7);
        chai_1.expect(result).to.equal(2);
    });
    //middle
    it(`For array [3,5,7] and sought-for value 5 should return position 1`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7], 5);
        chai_1.expect(result).to.equal(1);
    });
    //undefined
    it(`For array [3,5,7] and sought-for value 0 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7], 0);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [3,5,7] and sought-for value 50 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7], 50);
        chai_1.expect(result).to.equal(undefined);
    });
    //array of 6 elements
    //first
    it(`For array [3,5,7,10,11,25] and sought-for value 3 should return position 0`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7, 10, 11, 25], 3);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it(`For array [3,5,7,10,11,25] and sought-for value 25 should return position 5`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7, 10, 11, 25], 25);
        chai_1.expect(result).to.equal(5);
    });
    //middle
    it(`For array [3,5,7,10,11,25] and sought-for value 7 should return position 2`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7, 10, 11, 25], 7);
        chai_1.expect(result).to.equal(2);
    });
    //left
    it(`For array [3,5,7,10,11,25] and sought-for value 5 should return position 1`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7, 10, 11, 25], 5);
        chai_1.expect(result).to.equal(1);
    });
    //right
    it(`For array [3,5,7,10,11,25] and sought-for value 11 should return position 4`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7, 10, 11, 25], 11);
        chai_1.expect(result).to.equal(4);
    });
    //undefined
    it(`For array [3,5,7,10,11,25] and sought-for value -5 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7, 10, 11, 25], -5);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [3,5,7,10,11,25] and sought-for value 26 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([3, 5, 7, 10, 11, 25], 26);
        chai_1.expect(result).to.equal(undefined);
    });
    //array of 7 elements
    //first
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 3 should return position 0`, function () {
        const result = BinarySearch_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], -2);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 25 should return position 6`, function () {
        const result = BinarySearch_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 25);
        chai_1.expect(result).to.equal(6);
    });
    //middle
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 7 should return position 3`, function () {
        const result = BinarySearch_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 7);
        chai_1.expect(result).to.equal(3);
    });
    //left
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 5 should return position 2`, function () {
        const result = BinarySearch_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 5);
        chai_1.expect(result).to.equal(2);
    });
    //right
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 11 should return position 5`, function () {
        const result = BinarySearch_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 11);
        chai_1.expect(result).to.equal(5);
    });
    //undefined
    it(`For array [-2,3,5,7,10,11,25] and sought-for value -5 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], -5);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 26 should return "undefined"`, function () {
        const result = BinarySearch_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 26);
        chai_1.expect(result).to.equal(undefined);
    });
    //mocha --require ts-node/register test/BinarySearch.test.ts
});
//# sourceMappingURL=BinarySearch.test.js.map