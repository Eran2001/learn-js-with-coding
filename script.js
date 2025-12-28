"use strict";

const logger = (apples, oranges) => {
  const sentence = `I have ${apples} ${
    apples <= 1 ? "Apple" : "Apples"
  } and ${oranges} Oranges.`;

  return sentence;
};

const logMySentence = logger(0, 2);
console.log(logMySentence);
