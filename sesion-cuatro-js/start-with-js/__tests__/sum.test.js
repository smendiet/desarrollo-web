import { sum } from '../sum';

describe('Sum function', () => {
  test('adds 0 + 0 to equal 0', () => {
    const input = sum(-5, -6);
    const output = -11;

    expect(input).toEqual(output);
  });
  
  test('adds 4 + 10 to equal 14', () => {
    const input = sum(4, 10);
    const output = 14;
    
    expect(input).toEqual(output);
  });

  test('adds -5 + -6 to equal -11', () => {
    const input = sum(-5, -6);
    const output = -11;

    expect(input).toEqual(output);
  });
  
  test('add 15 + -11 to equal 4', () => {
    const input = sum(15, -11);
    const output = 4;

    expect(input).toEqual(output);
  });
});
