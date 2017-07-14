'use strict';

describe('pos', () => {

  it('when number is time of 3,should return fizz', () => {

   let num=3;

   const actualResult=fizzBuzzWhizz(num);

   let expectedResult = 'fizz';

   expect(actualResult).toEqual(expectedResult);

  });

  it('when number is time of 5,should return buzz',()=>{
    let num =5;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = 'buzz';
    expect(actualResult).toEqual(expectedResult);
  })

  it('when number is time of 7,should return buzz',()=>{
    let num =7;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = 'whizz';
    expect(actualResult).toEqual(expectedResult);
  })

  it('when number is not time of 3,5 or 7,should return the number',()=>{
    let num =4;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = num;
    expect(actualResult).toEqual(expectedResult);
  })

  it('when number is time of 3 and 5,should return fizzbuzz',()=>{
    let num =15;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = 'fizzbuzz';
    expect(actualResult).toEqual(expectedResult);
  })

  it('when number is time of 3 and 7,should return fizzwhizz',()=>{
    let num =21;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = 'fizzwhizz';
    expect(actualResult).toEqual(expectedResult);
  })

  it('when number is time of 5 and 7,should return fizzbuzz',()=>{
    let num =70;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = 'buzzwhizz';
    expect(actualResult).toEqual(expectedResult);
  })

  it('when number is time of 3 and 5 and 7,should return fizzbuzz',()=>{
    let num =105;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = 'fizzbuzzwhizz';
    expect(actualResult).toEqual(expectedResult);
  })

  it('when number contains 3,should return fizz',()=>{
    let num =35;
    const actualResult=fizzBuzzWhizz(num);
    let expectedResult = 'fizz';
    expect(actualResult).toEqual(expectedResult);
  })
});
