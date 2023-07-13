import calculate from '../../logic/calculate';

describe('Calculate function', () => {
  test('Should return object with key value next "8"', () => {
    const result = calculate(
      {
        total: null,
        next: null,
        operation: null,
      },
      '8',
    );

    expect(result).toStrictEqual({ total: null, next: '8' });
  });

  test('Should return object with key value next "50" and operation "+"', () => {
    const firstOperation = calculate(
      {
        total: '50',
        next: null,
        operation: '+',
      },
      '5',
    );
    const secondOperation = calculate(firstOperation, '=');
    expect(secondOperation).toStrictEqual({
      total: '55',
      next: null,
      operation: null,
    });
  });
});
