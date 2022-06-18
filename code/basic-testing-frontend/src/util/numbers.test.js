import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should take a number is string format and convert it to a number', () => {
  // Arrange
  const text1 = '55';

  // Act
  const result = parseInt(text1);
  const expectedResult = transformToNumber(text1);

  // Assert
  expect(result).toBe(expectedResult);
});

it('should return NaN if string cannot be converted to a number', () => {
  const text1 = 'fifty-five';

  const expectedResult = transformToNumber(text1);

  expect(expectedResult).toBeNaN();
});

it('should retun NaN when no arg is passed', () => {
  const result = transformToNumber();

  expect(result).toBeNaN();
});
