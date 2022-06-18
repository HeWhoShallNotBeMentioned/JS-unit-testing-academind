import { test, it, expect } from 'vitest';
// test and it are synonyms

import { add } from './math';

it('should summrize all numbers in an array', () => {
  //Arrange
  const numbers = [1, 2, 3, 44];

  const expectedResult = numbers.reduce((prevVal, currVal) => {
    return prevVal + currVal;
  }, 0);
  //Act
  const result = add(numbers);
  //Assert
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
  const inputs1 = ['invalid', 55];

  const results1 = add(inputs1);

  expect(results1).toBeNaN();
});

it('It should provide a correct sum if an array of numeric string values is provided', () => {
  const inputs = ['9', '5', '3', '8'];

  const expectedResult = inputs.reduce((prevVal, currVal) => {
    return prevVal + parseInt(currVal);
  }, 0);

  const result = add(inputs);

  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  const inputs = [];

  const result = add(inputs);

  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the add function', () => {
  const resultFn = () => {
    add();
  };
  // generic error test
  expect(resultFn).toThrow();
  // test for specfic error message
  expect(resultFn).toThrowError('numbers is not iterable');
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow();
});
