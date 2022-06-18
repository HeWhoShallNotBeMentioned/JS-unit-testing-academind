import { it, expect, describe } from 'vitest';

import { transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should take a number is string format and convert it to a number', () => {
    // Arrange
    const text1 = '55';

    // Act
    const result = parseInt(text1);
    const expectedResult = transformToNumber(text1);

    // Assert
    expect(result).toBeTypeOf('number');
    expect(result).toBe(expectedResult);
  });

  it('should return NaN if string cannot be converted to a number', () => {
    const text1 = 'fifty-five';
    const text2 = {};

    const expectedResult = transformToNumber(text1);

    const expectedResult2 = transformToNumber(text2);

    expect(expectedResult).toBeNaN();
    expect(expectedResult2).toBeNaN();
  });

  it('should retun NaN when no arg is passed', () => {
    const result = transformToNumber();

    expect(result).toBeNaN();
  });
});
