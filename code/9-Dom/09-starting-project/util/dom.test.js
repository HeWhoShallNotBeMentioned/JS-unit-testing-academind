import fs from 'fs';
import path from 'path';
import { it, expect, describe, vi, beforeEach } from 'vitest';
import { Window } from 'happy-dom';
import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDOcumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDOcumentContent);
});

it('should add an error paragraph to the id="errors" element', () => {
  showError('test');

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it('should provide the error message in the paragraph', () => {
  const testErrorMessage = 'Test Error Message';

  showError(testErrorMessage);
  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild.textContent;

  expect(errorParagraph).toBe(testErrorMessage);
});
