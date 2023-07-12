import operate from '../../logic/operate';

describe('Test operate function', () => {
  test('Should return "100"', () => {
    const result = operate(50, 50, '+');

    expect(result).toBe('100');
  });

  test('Should return "-10"', () => {
    const result = operate(20, 30, '-');

    expect(result).toBe('-10');
  });

  test('Should return "25"', () => {
    const result = operate(5, 5, 'x');

    expect(result).toBe('25');
  });

  test('Should return "Can\'t divide by 0."', () => {
    const result = operate(60, 0, '÷');

    expect(result).toBe("Can't divide by 0.");
  });

  test('Should return "1"', () => {
    const result = operate(15, 2, '%');

    expect(result).toBe('1');
  });

  test("Should Can't find modulo as can't divide by 0.", () => {
    const result = operate(60, 0, '%');

    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('Should throw and Error', () => {
    expect(() => {
      operate(26, 11, '#');
    }).toThrow("Unknown operation '#'");
  });
});
