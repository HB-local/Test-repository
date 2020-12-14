import { expect } from 'chai'
import 'mocha'
import { compare, IMyInterface } from '../SortTest'

describe('ƒ sortTest()', function () {
  // 2 elements
  it('For the test case should return [{ a: "str" }, { a: "str1" }]', function () {
    const o: IMyInterface[] = [{ a: 'str1' }, { a: 'str' }];
    const result = o.sort(compare);
    const expectResult: IMyInterface[] = [{ a: 'str' }, { a: 'str1' }];
    expect(result).to.deep.equal(expectResult);
    //expect(result).to.equal(expectResult);
  });

  // 2 elements
  it('For the test case should return [{ a: "str" }, { a: "str2" }]', function () {
    const o: IMyInterface[] = [{ a: 'str' }, { a: 'str2' }];
    const result = o.sort(compare);
    const expectResult: IMyInterface[] = [{ a: 'str' }, { a: 'str2' }];
    expect(result).to.deep.equal(expectResult);
  });

  // 2 elements
  it('For the test case should return [{ a: "str" }, { a: "str" }]', function () {
    const o: IMyInterface[] = [{ a: 'str' }, { a: 'str' }];
    const result = o.sort(compare);
    const expectResult: IMyInterface[] = [{ a: 'str' }, { a: 'str' }];
    expect(result).to.deep.equal(expectResult);
  });

  // 3 elements
  it('For the test case should return [{ a: "abc" }, { a: "b" }, { a: "str5" }]', function () {
    const o: IMyInterface[] = [{ a: 'str5' }, { a: 'abc' }, { a: 'b' }];
    const result = o.sort(compare);
    const expectResult: IMyInterface[] = [{ a: 'abc' }, { a: 'b' }, { a: 'str5' }];
    expect(result).to.deep.equal(expectResult);
  });

  // 4 elements
  it('For the test case should return [{ a: "abc" }, { a: "abc" }, { a: "b" }, { a: "str5" }]', function () {
    const o: IMyInterface[] = [{ a: 'str5' }, { a: 'abc' }, { a: 'b' }, { a: 'abc' }];
    const result = o.sort(compare);
    const expectResult: IMyInterface[] = [{ a: 'abc' }, { a: 'abc' }, { a: 'b' }, { a: 'str5' }];
    expect(result).to.deep.equal(expectResult);
  });

})
