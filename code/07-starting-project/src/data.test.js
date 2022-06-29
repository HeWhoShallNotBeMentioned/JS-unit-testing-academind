import { it, expect, describe, vi } from 'vitest';

import { generateReportData, storeData } from './data.js';

// create a spy function so that the logFn is not run with side effects
describe('generateReportData()', () => {
  it('should execute LogFn if it is provided', () => {
    const logger = vi.fn();

    // Can replace the fn above
    logger.mockImplementation(() => {});
    generateReportData(logger);
    expect(logger).toHaveBeenCalled();
  });

  //   it('should not execute LogFn if it is not provided', () => {
  //     const logger = vi.fn();
  //     generateReportData();
  //     expect(logger).not.toHaveBeenCalled();
  //   });
});
