"use strict";

// fnction for get age
function getUserAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return `User age: ${age}`;
}

const getAge = getUserAge(2001);
console.log(getAge);
