"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const SortTest_1 = require("../SortTest");
describe('ƒ sortTest()', function () {
    // 2 elements
    it('For the test case should return [{ a: "str" }, { a: "str1" }]', function () {
        const o = [{ a: 'str1' }, { a: 'str' }];
        const result = o.sort(SortTest_1.compare);
        const expectResult = [{ a: 'str' }, { a: 'str1' }];
        chai_1.expect(result).to.deep.equal(expectResult);
        //expect(result).to.equal(expectResult);
    });
    // 2 elements
    it('For the test case should return [{ a: "str" }, { a: "str2" }]', function () {
        const o = [{ a: 'str' }, { a: 'str2' }];
        const result = o.sort(SortTest_1.compare);
        const expectResult = [{ a: 'str' }, { a: 'str2' }];
        chai_1.expect(result).to.deep.equal(expectResult);
    });
    // 2 elements
    it('For the test case should return [{ a: "str" }, { a: "str" }]', function () {
        const o = [{ a: 'str' }, { a: 'str' }];
        const result = o.sort(SortTest_1.compare);
        const expectResult = [{ a: 'str' }, { a: 'str' }];
        chai_1.expect(result).to.deep.equal(expectResult);
    });
    // 3 elements
    it('For the test case should return [{ a: "abc" }, { a: "b" }, { a: "str5" }]', function () {
        const o = [{ a: 'str5' }, { a: 'abc' }, { a: 'b' }];
        const result = o.sort(SortTest_1.compare);
        const expectResult = [{ a: 'abc' }, { a: 'b' }, { a: 'str5' }];
        chai_1.expect(result).to.deep.equal(expectResult);
    });
    // 4 elements
    it('For the test case should return [{ a: "abc" }, { a: "abc" }, { a: "b" }, { a: "str5" }]', function () {
        const o = [{ a: 'str5' }, { a: 'abc' }, { a: 'b' }, { a: 'abc' }];
        const result = o.sort(SortTest_1.compare);
        const expectResult = [{ a: 'abc' }, { a: 'abc' }, { a: 'b' }, { a: 'str5' }];
        chai_1.expect(result).to.deep.equal(expectResult);
    });
});
//# sourceMappingURL=SortTest.test.js.map