import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 2, b: 4, action: Action.Add, expected: 6 },
  { a: 2, b: 4, action: Action.Subtract, expected: -2 },
  { a: 2, b: 4, action: Action.Multiply, expected: 8 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 4, b: 2, action: 'invalid', expected: null },
  { a: 4, b: '2', action: Action.Add, expected: null },
  { a: '2', b: 4, action: Action.Add, expected: null },
  { a: '4', b: '2', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('should blah-blah', ({ a, b, action, expected }) => {
    const result = simpleCalculator({ a, b, action });
    expect(result).toBe(expected);
  });
});
