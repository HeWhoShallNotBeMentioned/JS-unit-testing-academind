import { it, expect, describe } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
  it('Should return an error when a length > 0 is entered', () => {
    const str = '';
    const str2 = '   ';

    const result = () => validateStringNotEmpty(str);
    const result2 = () => validateStringNotEmpty(str2);

    expect(result).toThrowError('Invalid input - must not be empty.');
    expect(result2).toThrowError('Invalid input - must not be empty.');
  });
});

describe('validateNumber()', () => {
  it('Will not throw an error when a number is entered', () => {
    const num2 = 4;
    const result2 = () => validateNumber(num2);
    expect(result2).not.toThrowError();
  });
  it('will return an error if a spelled out number is not entered', () => {
    const num = 'four';
    const result = () => validateNumber(num);
    expect(result).toThrowError('Invalid number input.');
  });
});

it('will return an error if boolean is entered', () => {
  const num3 = true;
  const result3 = () => validateNumber(num3);
  expect(result3).toThrowError('Invalid number input.');
});

it('will return an error if an obj is entered', () => {
  const num4 = {};
  const result4 = () => validateNumber(num4);
  expect(result4).toThrowError('Invalid number input.');
});
it('will return an error if NaN is entered', () => {
  const num5 = NaN;
  const result5 = () => validateNumber(num5);
  expect(result5).toThrowError('Invalid number input.');
});
it('', () => {
  const num6 = '20';
  const result6 = () => validateNumber(num6);
  expect(result6).toThrowError('Invalid number input.');
});
