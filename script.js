// Создать базовый класс.
function BaseBuilder(value) {
  this.value = value;
}

BaseBuilder.prototype.get = function() {
  return this.value;
}

// Создать первый дочерний класс, который наследуется от базового (ES6).
class IntBuilder extends BaseBuilder {
  constructor(value) {
    super(value);
  }

  static random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  plus(...numbers) {
    this.value += numbers.reduce((sum, item) => sum + item, 0);
    return this;
  }

  minus(...numbers) {
    this.value -= numbers.reduce((sum, item) => sum + item, 0);
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  divide(number) {
    this.value /= number;
    return this;
  }

  mod(number) {
    this.value %= number;
    return this;
  }
}

// Создать второй дочерний класс, который наследуется от базового (ES5).
function StringBuilder(value) {
  BaseBuilder.call(this, value);
}

StringBuilder.prototype = Object.create(BaseBuilder.prototype);

StringBuilder.prototype.plus = function(...strings) {
  this.value += strings.join('');
  return this;
};

StringBuilder.prototype.minus = function(number) {
  this.value = this.value.slice(0, -number);
  return this;
};

StringBuilder.prototype.multiply = function(number) {
  const originalValue = this.value;
  let result = '';
  for (let counter = 0; counter < number; counter++) {
    result += originalValue;
  }
  this.value = result;
  return this;
};

StringBuilder.prototype.divide = function(number) {
  const length = Math.floor(this.value.length / number);
  this.sub(0, length);
  return this;
};

StringBuilder.prototype.remove = function(string) {
  let result = '';
  let startPosition = 0;
  while (true) {
    const index = this.value.indexOf(string, startPosition);
    if (index === -1) {
      break;
    }
    if (index !== 0) {
      result += this.value.slice(startPosition, index);
    }
    startPosition = index + string.length;
  }
  this.value = result + this.value.slice(startPosition);
  return this;
};

StringBuilder.prototype.removeInAnotherWay = function(string) {
  this.value = this.value
    .split(string)
    .filter(item => item !== string)
    .join('');
  return this;
};

StringBuilder.prototype.sub = function(start, length) {
  this.value = this.value.substr(start, length);
  return this;
};
