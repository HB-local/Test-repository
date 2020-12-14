"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const GenericBinarySearchV1_1 = require("../GenericBinarySearchV1");
describe('ƒ binarySearch()', function () {
    // array of 0 elements
    it('For array [] and sought-for value 5 should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch([], 5, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    it('For array [] and sought-for value 0 should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch([], 0, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    // array of 1 element
    // first and last
    it('For array [5] and sought-for value 5 should return position 0', function () {
        const result = GenericBinarySearchV1_1.binarySearch([5], 5, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(0);
    });
    // undefined
    it('For array [5] and sought-for value 1 should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch([5], 1, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [5] and sought-for value 7 should return "undefined"`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([5], 7, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //array of 3 elements
    //first
    it(`For array [3,5,7] and sought-for value 3 should return position 0`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7], 3, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it(`For array [3,5,7] and sought-for value 7 should return position 2`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7], 7, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(2);
    });
    //middle
    it(`For array [3,5,7] and sought-for value 5 should return position 1`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7], 5, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(1);
    });
    //undefined
    it(`For array [3,5,7] and sought-for value 0 should return "undefined"`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7], 0, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [3,5,7] and sought-for value 50 should return "undefined"`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7], 50, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //array of 6 elements
    //first
    it(`For array [3,5,7,10,11,25] and sought-for value 3 should return position 0`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7, 10, 11, 25], 3, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it(`For array [3,5,7,10,11,25] and sought-for value 25 should return position 5`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7, 10, 11, 25], 25, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(5);
    });
    //middle
    it(`For array [3,5,7,10,11,25] and sought-for value 7 should return position 2`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7, 10, 11, 25], 7, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(2);
    });
    //left
    it(`For array [3,5,7,10,11,25] and sought-for value 5 should return position 1`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7, 10, 11, 25], 5, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(1);
    });
    //right
    it(`For array [3,5,7,10,11,25] and sought-for value 11 should return position 4`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7, 10, 11, 25], 11, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(4);
    });
    //undefined
    it(`For array [3,5,7,10,11,25] and sought-for value -5 should return "undefined"`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7, 10, 11, 25], -5, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [3,5,7,10,11,25] and sought-for value 26 should return "undefined"`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([3, 5, 7, 10, 11, 25], 26, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //array of 7 elements
    //first
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 3 should return position 0`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], -2, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 25 should return position 6`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 25, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(6);
    });
    //middle
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 7 should return position 3`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 7, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(3);
    });
    //left
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 5 should return position 2`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 5, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(2);
    });
    //right
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 11 should return position 5`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 11, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(5);
    });
    //undefined
    it(`For array [-2,3,5,7,10,11,25] and sought-for value -5 should return "undefined"`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], -5, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it(`For array [-2,3,5,7,10,11,25] and sought-for value 26 should return "undefined"`, function () {
        const result = GenericBinarySearchV1_1.binarySearch([-2, 3, 5, 7, 10, 11, 25], 26, GenericBinarySearchV1_1.numberComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    // string array of 0 elements
    it('For array [] and sought-for value "Month" should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch([], 'Month', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    it('For array [] and sought-for value "" should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch([], '', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    // string array of 1 element
    // first and last
    it('For array ["November"] and sought-for value "November" should return position 0', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['November'], 'November', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(0);
    });
    // undefined
    it('For array ["November"] and sought-for value "May" should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['November'], 'May', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it('For array ["November"] and sought-for value "October" should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['November'], 'October', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //string array of 3 elements
    //first
    it('For array ["Apple","Cherry","Lemon"] and sought-for value "Apple" should return position 0', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apple', 'Cherry', 'Lemon'], 'Apple', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it('For array ["Apple","Cherry","Lemon"] and sought-for value "Lemon" should return position 2', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apple', 'Cherry', 'Lemon'], 'Lemon', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(2);
    });
    //middle
    it('For array ["Apple","Cherry","Lemon"] and sought-for value "Cherry" should return position 1', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apple', 'Cherry', 'Lemon'], 'Cherry', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(1);
    });
    //undefined
    it('For array ["Apple","Cherry","Lemon"] and sought-for value "Orange" should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apple', 'Cherry', 'Lemon'], 'Orange', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //string array of 6 elements
    //first
    it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Apricot" should return position 0', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apricot', 'Avocado', 'Banana', 'Lemon', 'Lime', 'Pineapple'], 'Apricot', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(0);
    });
    //last
    it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Pineapple" should return position 5', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apricot', 'Avocado', 'Banana', 'Lemon', 'Lime', 'Pineapple'], 'Pineapple', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(5);
    });
    //middle
    it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Banana" should return position 2', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apricot', 'Avocado', 'Banana', 'Lemon', 'Lime', 'Pineapple'], 'Banana', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(2);
    });
    //left
    it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Avocado" should return position 1', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apricot', 'Avocado', 'Banana', 'Lemon', 'Lime', 'Pineapple'], 'Avocado', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(1);
    });
    //right
    it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Lime" should return position 4', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apricot', 'Avocado', 'Banana', 'Lemon', 'Lime', 'Pineapple'], 'Lime', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(4);
    });
    //undefined
    it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Apple" should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apricot', 'Avocado', 'Banana', 'Lemon', 'Lime', 'Pineapple'], 'Apple', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //undefined
    it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Pomelo" should return "undefined"', function () {
        const result = GenericBinarySearchV1_1.binarySearch(['Apricot', 'Avocado', 'Banana', 'Lemon', 'Lime', 'Pineapple'], 'Pomelo', GenericBinarySearchV1_1.stringComparison);
        chai_1.expect(result).to.equal(undefined);
    });
    //mocha --require ts-node/register test/BinarySearch.test.ts
});
//# sourceMappingURL=GenericBinarySearchV1.test.js.map