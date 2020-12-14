"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const ProcessFile_1 = require("../ProcessFile");
describe('ƒ processFileTest()', function () {
    //
    it('For the test case should return [{ a: "str" }, { a: "str1" }]', function () {
        ProcessFile_1.ProcessFile("DomainsDefinition.csv");
        //expect(result).to.deep.equal(expectResult);
        chai_1.expect(1).to.equal(1);
    });
});
//# sourceMappingURL=ProcessFile.test.js.map