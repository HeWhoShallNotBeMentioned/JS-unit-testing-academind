import fs from 'fs';
import path from 'path';
import { it, expect, describe, vi } from 'vitest';
import { Window } from 'happy-dom';
import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDOcumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;
document.write(htmlDOcumentContent);
vi.stubGlobal('document', document);

it('should add an error paragraph to the id="errors" element', () => {
  showError('test');

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});
