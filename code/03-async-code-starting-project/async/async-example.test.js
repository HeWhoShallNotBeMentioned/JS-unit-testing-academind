import { expect } from 'chai';
import { it } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

// callback
it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      //expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

// resolves / rejects promise handle
it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
// async + await
it('should generate a token value', async () => {
  const testUserEmail = 'test@test.com';
  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
});
