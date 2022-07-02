import { it, expect, describe } from 'vitest';
import { savePost, extractPostData } from './posts';
describe('extractPostData()', () => {
  it('should extract title and content from provided form data', () => {
    const testFormData = {
      title: 'test Title',
      content: 'test Content',
      get(key) {
        return this[key];
      },
    };
    const data = extractPostData(testFormData);
    expect(data.title).toBe('test Title');
    expect(data.content).toBe('test Content');
  });
});

//describe('savePost()', () => {});
