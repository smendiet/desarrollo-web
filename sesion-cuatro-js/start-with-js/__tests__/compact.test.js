import { compact } from '../compact';

describe('Compact function', () => {
  test('it removes falsy values', () => {
    const input = [0, 1, false, 2, '', 3];
    const output = [1, 2, 3];

    expect(compact(input)).toEqual(output);
  });

  test('Array cannot be empty', () => {
    expect(() => compact([])).toThrow();
  });
});