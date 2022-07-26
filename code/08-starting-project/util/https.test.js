import { it, expect, describe, vi, test } from 'vitest';
import { HttpError } from './errors';

import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string.');
    }
    const testResponse = {
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest()', () => {
  it('should return any available respnose data', () => {
    const testData = { key: 'test' };
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it('Should convert the provided data to JSON before sending to the backend.', async () => {
    const testData = { key: 'test' };
    let errorMessage;
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }
    expect(errorMessage).not.toBe('Not a string.');
  });
  it('shoulds return an error if response.ok = false', () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json: () => {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });

    const testData = { key: 'test' };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
