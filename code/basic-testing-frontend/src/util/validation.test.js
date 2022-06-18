import { it, expect } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

it('Should return an error when a length > 0 is entered', () => {
  const str = '';
  const str2 = '   ';

  const result = () => validateStringNotEmpty(str);
  const result2 = () => validateStringNotEmpty(str2);

  expect(result).toThrowError('Invalid input - must not be empty.');
  expect(result2).toThrowError('Invalid input - must not be empty.');
});

it('will return an error is a number is not entered', () => {
  const num = 'four';
  const num2 = 4;
  const num3 = true;
  const num4 = {};
  const num5 = NaN;
  const num6 = '20';

  const result = () => validateNumber(num);
  const result2 = () => validateNumber(num2);
  const result3 = () => validateNumber(num3);
  const result4 = () => validateNumber(num4);
  const result5 = () => validateNumber(num5);
  const result6 = () => validateNumber(num6);

  expect(result).toThrowError('Invalid number input.');
  expect(result2).not.toThrowError();
  expect(result3).toThrowError('Invalid number input.');
  expect(result4).toThrowError('Invalid number input.');
  expect(result5).toThrowError('Invalid number input.');
  expect(result6).toThrowError('Invalid number input.');
});
