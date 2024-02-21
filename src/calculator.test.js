const calculator = require("./calculator");

describe("Calculator", () => {
  it("Should sum 2 + 2 and return 4", () => {
    expect(calculator.sum(2, 2)).toBe(4);
  });

  // it('Should sub 4 - 2 and return 2', () => {
  //   expect(calculator.sub(4,2)).toBe(2);
  // });

  // it('Should times 4 x 2 and return 8', () => {
  //   expect(calculator.times(4,2)).toBe(8);
  // });

  // it('Should divide 4 / 2 and return 2', () => {
  //   expect(calculator.div(4,2)).toBe(2);
  // });

  // it('Should throw an error when trying to divide any number by 0', () => {
  //   expect(() => calculator.div(4,0)).toThrow('0 is not divisible');
  // });
});
