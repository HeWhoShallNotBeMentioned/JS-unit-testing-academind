import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';

import { User } from './hooks';
const testEmail = 'test@test.com';
let user;
beforeAll(() => {
  user = new User(testEmail);
  console.log('beforeAll');
});

beforeEach(() => {
  user = new User(testEmail);
  console.log('beforeEach');
});

afterAll(() => {
  console.log('afterAll');
});

afterEach(() => {
  // user = new User(testEmail);
  console.log('afterEach');
});

// describe.concurrent runs all the tests in the block concurrently
// can also do it for individual tests with it.concurrent
// by default, different test pages are concurrently

it('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
