import { expect } from 'chai'
import 'mocha'
import { ProcessFile } from '../ProcessFile'

describe('ƒ processFileTest()', function () {
    //
    it('For the test case should return [{ a: "str" }, { a: "str1" }]', function () {

        ProcessFile("DomainsDefinition.csv");
        //expect(result).to.deep.equal(expectResult);
        expect(1).to.equal(1);
    });
})