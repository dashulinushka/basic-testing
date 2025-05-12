import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const data = { a: 2, b: 4, action: Action.Add };
    const result = simpleCalculator(data);
    expect(result).toBe(6);
  });

  test('should subtract two numbers', () => {
    const data = { a: 2, b: 4, action: Action.Subtract };
    const result = simpleCalculator(data);
    expect(result).toBe(-2);
  });

  test('should multiply two numbers', () => {
    const data = { a: 2, b: 4, action: Action.Multiply };
    const result = simpleCalculator(data);
    expect(result).toBe(8);
  });

  test('should divide two numbers', () => {
    const data = { a: 9, b: 3, action: Action.Divide };
    const result = simpleCalculator(data);
    expect(result).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    const data = { a: 3, b: 3, action: Action.Exponentiate };
    const result = simpleCalculator(data);
    expect(result).toBe(27);
  });

  test('should return null for invalid action', () => {
    const data = { a: 2, b: 4, action: 'invalid' };
    const result = simpleCalculator(data);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const res1 = simpleCalculator({ a: '1', b: 2, action: Action.Add });
    const res2 = simpleCalculator({ a: 1, b: '2', action: Action.Add });
    const res3 = simpleCalculator({ a: '1', b: '2', action: Action.Add });
    expect(res1).toBeNull();
    expect(res2).toBeNull();
    expect(res3).toBeNull();
  });
});
