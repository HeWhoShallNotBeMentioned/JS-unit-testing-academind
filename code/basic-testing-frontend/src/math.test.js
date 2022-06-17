import { test, it, expect } from 'vitest';

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

  expect(results1).toBe(NaN);
});
