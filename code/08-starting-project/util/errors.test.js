import { it, describe, expect } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should have the provided status code, message, and data', () => {
    const testStatus = 555;
    const testMessage = 'Test Message';
    const testData = { key: 'test' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toEqual(testData);
  });

  it('should contain undefined data if no data is provided', () => {
    const testStatus = 555;
    const testMessage = 'Test Message';
    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});
describe('class ValidationError', () => {
  it('should contain the provided message', () => {
    const testMessage = 'Test Message';
    const testValidation = new ValidationError(testMessage);
    expect(testValidation.message).toBe(testMessage);
  });
});
