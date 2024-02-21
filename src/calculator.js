function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) throw new Error("0 is not divisible");
  return a / b;
}

function pow(a, b) {
  return Math.pow(a, b);
}

module.exports = {
  sum,
  sub,
  times,
  div,
  pow,
};
