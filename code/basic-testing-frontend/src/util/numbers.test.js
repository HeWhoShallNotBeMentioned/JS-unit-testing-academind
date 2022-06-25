import { it, expect, describe } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
  it('should take a number is string format and convert it to a number', () => {
    // Arrange
    const text1 = '55';

    // Act
    const result = transformToNumber(text1);

    // Assert
    expect(result).toBeTypeOf('number');
  });

  it('should take a number is string format and convert it to a number', () => {
    // Arrange
    const text1 = '55';

    // Act
    const expectedResult = transformToNumber(text1);

    // Assert
    expect(parseInt(text1)).toBe(expectedResult);
  });

  it('should return NaN if passed a non-transformable value', () => {
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

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string values is provided.', () => {
    const numberValues = ['1', '2'];
    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers).toEqual([1, 2]);
  });
  it('should throw an error if an array with at least one empty string is passed', () => {
    const numberValues = ['1', ''];
    const resultsFn = () => {
      cleanNumbers(numberValues);
    };
    expect(resultsFn).toThrowError('Invalid input - must not be empty.');
  });
  // it('', () => {});
});
