import { it, expect, describe } from 'vitest';

import { validateNotEmpty } from './validation';

describe('validateNotEmpty() ', () => {
  it('validate an error happens if an empty string is provided', () => {
    const testText = '';
    const testErrorMessage = 'error message';

    const resultFn = () => {
      validateNotEmpty(testText, testErrorMessage);
    };

    expect(resultFn).toThrowError(testErrorMessage);
  });

  it('validate an error happens if a string with only blanks is provided', () => {
    const testText = '   ';
    const testErrorMessage = 'error message';

    const resultFn = () => {
      validateNotEmpty(testText, testErrorMessage);
    };

    expect(resultFn).toThrowError(testErrorMessage);
  });

  it('validate an error message is sent if an error and message is provided', () => {
    const testText = '';
    const testErrorMessage = 'valid error message';

    const resultFn = () => {
      validateNotEmpty(testText, testErrorMessage);
    };

    expect(resultFn).toThrowError(testErrorMessage);
  });
});
