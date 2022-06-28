import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

// Create a mock fs so that when writeData is called, it will use the test file system and not the real one.
// This is done so that no side effects are caused such as writing to cats.txt
vi.mock('fs');

it('should execute the writefile method', () => {
  const data = 'Smithson';
  const filename = 'cats.txt';

  writeData(data, filename);

  //return expect(writeData(data, filename)).resolves.toBeUndefined();
  return expect(fs.writeFile).toBeCalled();
});
