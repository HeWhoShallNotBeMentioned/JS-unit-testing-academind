import { it, expect } from 'vitest';

import writeData from './io';

it('should execute the writefile method', () => {
  const data = 'Smithson';
  const filename = 'cats.txt';
  return expect(writeData(data, filename)).resolves.toBeUndefined();
});
