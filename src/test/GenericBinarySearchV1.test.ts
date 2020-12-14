import { expect } from 'chai'
import 'mocha'
import { binarySearch, numberComparison, stringComparison } from '../GenericBinarySearchV1'

describe('ƒ binarySearch()', function () {
  // array of 0 elements
  it('For array [] and sought-for value 5 should return "undefined"', function () {
    const result = binarySearch([], 5, numberComparison);
    expect(result).to.equal(undefined);
  })
  it('For array [] and sought-for value 0 should return "undefined"', function () {
    const result = binarySearch([], 0, numberComparison)
    expect(result).to.equal(undefined)
  })

  // array of 1 element
  // first and last
  it('For array [5] and sought-for value 5 should return position 0', function () {
    const result = binarySearch([5], 5, numberComparison)
    expect(result).to.equal(0)
  })
  // undefined
  it('For array [5] and sought-for value 1 should return "undefined"', function () {
    const result = binarySearch([5], 1, numberComparison)
    expect(result).to.equal(undefined);
  });
  //undefined
  it(`For array [5] and sought-for value 7 should return "undefined"`, function () {
    const result = binarySearch([5], 7, numberComparison);
    expect(result).to.equal(undefined);
  });

  //array of 3 elements
  //first
  it(`For array [3,5,7] and sought-for value 3 should return position 0`, function () {
    const result = binarySearch([3, 5, 7], 3, numberComparison);
    expect(result).to.equal(0);
  });
  //last
  it(`For array [3,5,7] and sought-for value 7 should return position 2`, function () {
    const result = binarySearch([3, 5, 7], 7, numberComparison);
    expect(result).to.equal(2);
  });
  //middle
  it(`For array [3,5,7] and sought-for value 5 should return position 1`, function () {
    const result = binarySearch([3, 5, 7], 5, numberComparison);
    expect(result).to.equal(1);
  });
  //undefined
  it(`For array [3,5,7] and sought-for value 0 should return "undefined"`, function () {
    const result = binarySearch([3, 5, 7], 0, numberComparison);
    expect(result).to.equal(undefined);
  });
  //undefined
  it(`For array [3,5,7] and sought-for value 50 should return "undefined"`, function () {
    const result = binarySearch([3, 5, 7], 50, numberComparison);
    expect(result).to.equal(undefined);
  });

  //array of 6 elements
  //first
  it(`For array [3,5,7,10,11,25] and sought-for value 3 should return position 0`, function () {
    const result = binarySearch([3, 5, 7, 10, 11, 25], 3, numberComparison);
    expect(result).to.equal(0);
  });
  //last
  it(`For array [3,5,7,10,11,25] and sought-for value 25 should return position 5`, function () {
    const result = binarySearch([3, 5, 7, 10, 11, 25], 25, numberComparison);
    expect(result).to.equal(5);
  });
  //middle
  it(`For array [3,5,7,10,11,25] and sought-for value 7 should return position 2`, function () {
    const result = binarySearch([3, 5, 7, 10, 11, 25], 7, numberComparison);
    expect(result).to.equal(2);
  });
  //left
  it(`For array [3,5,7,10,11,25] and sought-for value 5 should return position 1`, function () {
    const result = binarySearch([3, 5, 7, 10, 11, 25], 5, numberComparison);
    expect(result).to.equal(1);
  });
  //right
  it(`For array [3,5,7,10,11,25] and sought-for value 11 should return position 4`, function () {
    const result = binarySearch([3, 5, 7, 10, 11, 25], 11, numberComparison);
    expect(result).to.equal(4);
  });
  //undefined
  it(`For array [3,5,7,10,11,25] and sought-for value -5 should return "undefined"`, function () {
    const result = binarySearch([3, 5, 7, 10, 11, 25], -5, numberComparison);
    expect(result).to.equal(undefined);
  });
  //undefined
  it(`For array [3,5,7,10,11,25] and sought-for value 26 should return "undefined"`, function () {
    const result = binarySearch([3, 5, 7, 10, 11, 25], 26, numberComparison);
    expect(result).to.equal(undefined);
  });

  //array of 7 elements
  //first
  it(`For array [-2,3,5,7,10,11,25] and sought-for value 3 should return position 0`, function () {
    const result = binarySearch(
      [-2, 3, 5, 7, 10, 11, 25],
      -2,
      numberComparison
    );
    expect(result).to.equal(0);
  });
  //last
  it(`For array [-2,3,5,7,10,11,25] and sought-for value 25 should return position 6`, function () {
    const result = binarySearch(
      [-2, 3, 5, 7, 10, 11, 25],
      25,
      numberComparison
    );
    expect(result).to.equal(6);
  });
  //middle
  it(`For array [-2,3,5,7,10,11,25] and sought-for value 7 should return position 3`, function () {
    const result = binarySearch([-2, 3, 5, 7, 10, 11, 25], 7, numberComparison);
    expect(result).to.equal(3);
  });
  //left
  it(`For array [-2,3,5,7,10,11,25] and sought-for value 5 should return position 2`, function () {
    const result = binarySearch([-2, 3, 5, 7, 10, 11, 25], 5, numberComparison);
    expect(result).to.equal(2);
  });
  //right
  it(`For array [-2,3,5,7,10,11,25] and sought-for value 11 should return position 5`, function () {
    const result = binarySearch(
      [-2, 3, 5, 7, 10, 11, 25],
      11,
      numberComparison
    );
    expect(result).to.equal(5);
  });
  //undefined
  it(`For array [-2,3,5,7,10,11,25] and sought-for value -5 should return "undefined"`, function () {
    const result = binarySearch(
      [-2, 3, 5, 7, 10, 11, 25],
      -5,
      numberComparison
    );
    expect(result).to.equal(undefined);
  });
  //undefined
  it(`For array [-2,3,5,7,10,11,25] and sought-for value 26 should return "undefined"`, function () {
    const result = binarySearch(
      [-2, 3, 5, 7, 10, 11, 25],
      26,
      numberComparison
    );
    expect(result).to.equal(undefined);
  });


  // string array of 0 elements
  it('For array [] and sought-for value "Month" should return "undefined"', function () {
    const result = binarySearch([], 'Month', stringComparison);
    expect(result).to.equal(undefined);
  })
  it('For array [] and sought-for value "" should return "undefined"', function () {
    const result = binarySearch([], '', stringComparison)
    expect(result).to.equal(undefined)
  })

  // string array of 1 element
  // first and last
  it('For array ["November"] and sought-for value "November" should return position 0', function () {
    const result = binarySearch(['November'], 'November', stringComparison)
    expect(result).to.equal(0)
  })
  // undefined
  it('For array ["November"] and sought-for value "May" should return "undefined"', function () {
    const result = binarySearch(['November'], 'May', stringComparison)
    expect(result).to.equal(undefined);
  });
  //undefined
  it('For array ["November"] and sought-for value "October" should return "undefined"', function () {
    const result = binarySearch(['November'], 'October', stringComparison);
    expect(result).to.equal(undefined);
  });

  //string array of 3 elements
  //first
  it('For array ["Apple","Cherry","Lemon"] and sought-for value "Apple" should return position 0', function () {
    const result = binarySearch(['Apple', 'Cherry', 'Lemon'], 'Apple', stringComparison);
    expect(result).to.equal(0);
  });
  //last
  it('For array ["Apple","Cherry","Lemon"] and sought-for value "Lemon" should return position 2', function () {
    const result = binarySearch(['Apple', 'Cherry', 'Lemon'], 'Lemon', stringComparison);
    expect(result).to.equal(2);
  });
  //middle
  it('For array ["Apple","Cherry","Lemon"] and sought-for value "Cherry" should return position 1', function () {
    const result = binarySearch(['Apple', 'Cherry', 'Lemon'], 'Cherry', stringComparison);
    expect(result).to.equal(1);
  });
  //undefined
  it('For array ["Apple","Cherry","Lemon"] and sought-for value "Orange" should return "undefined"', function () {
    const result = binarySearch(['Apple', 'Cherry', 'Lemon'], 'Orange', stringComparison);
    expect(result).to.equal(undefined);
  });

  //string array of 6 elements
  //first
  it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Apricot" should return position 0', function () {
    const result = binarySearch(['Apricot','Avocado','Banana','Lemon','Lime','Pineapple'], 'Apricot', stringComparison);
    expect(result).to.equal(0);
  });
  //last
  it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Pineapple" should return position 5', function () {
    const result = binarySearch(['Apricot','Avocado','Banana','Lemon','Lime','Pineapple'], 'Pineapple', stringComparison);
    expect(result).to.equal(5);
  });
  //middle
  it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Banana" should return position 2', function () {
    const result = binarySearch(['Apricot','Avocado','Banana','Lemon','Lime','Pineapple'], 'Banana', stringComparison);
    expect(result).to.equal(2);
  });
  //left
  it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Avocado" should return position 1', function () {
    const result = binarySearch(['Apricot','Avocado','Banana','Lemon','Lime','Pineapple'], 'Avocado', stringComparison);
    expect(result).to.equal(1);
  });
  //right
  it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Lime" should return position 4', function () {
    const result = binarySearch(['Apricot','Avocado','Banana','Lemon','Lime','Pineapple'], 'Lime', stringComparison);
    expect(result).to.equal(4);
  });
  //undefined
  it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Apple" should return "undefined"', function () {
    const result = binarySearch(['Apricot','Avocado','Banana','Lemon','Lime','Pineapple'], 'Apple', stringComparison);
    expect(result).to.equal(undefined);
  });
  //undefined
  it('For array ["Apricot","Avocado","Banana","Lemon","Lime","Pineapple"] and sought-for value "Pomelo" should return "undefined"', function () {
    const result = binarySearch(['Apricot','Avocado','Banana','Lemon','Lime','Pineapple'], 'Pomelo', stringComparison);
    expect(result).to.equal(undefined);
  });

  //mocha --require ts-node/register test/BinarySearch.test.ts
});
