import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');

it('should execute the writefile method', () => {
  const data = 'Smithson';
  const filename = 'cats.txt';

  writeData(data, filename);

  //return expect(writeData(data, filename)).resolves.toBeUndefined();
  return expect(fs.writeFile).toBeCalled();
});
