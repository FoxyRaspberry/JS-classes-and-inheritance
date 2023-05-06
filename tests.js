// Тестировать `IntBuilder`.
const randomNumber = IntBuilder.random(1, 100)
console.log('checkRandom', randomNumber);
console.assert(randomNumber >= 1 && randomNumber <= 100, 'Ожидаемый результат от 1 до 100, текущий результат', randomNumber);

const intBuilder = new IntBuilder(10);
const intResult = intBuilder
  .plus(6, 7, 10, 5)
  .minus(1, 4, 3, 2)
  .multiply(7)
  .divide(4)
  .mod(5)
  .get();
console.log('intResult', intResult);
console.assert(intResult === 4, 'Ожидаемый результат:', 4, 'Текущий результат:', intResult);

// Тестировать `StringBuilder`.
const stringBuilder = new StringBuilder('марципан');
const stringResult = stringBuilder
  .plus(' невкусный', '!')
  .minus(11)
  .divide(4)
  .multiply(2)
  .remove('а')
  .sub(1, 1)
  .get();
console.log('stringResult', stringResult);
console.assert(stringResult === 'м', 'Ожидаемый результат: \'м\'. Текущий результат:', stringResult);
