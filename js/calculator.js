"use strict";

const one = document.querySelector(".btnOne");
const two = document.querySelector(".btnTwo");
const three = document.querySelector(".btnThree");
const four = document.querySelector(".btnFour");
const five = document.querySelector(".btnFive");
const six = document.querySelector(".btnSix");
const seven = document.querySelector(".btnSeven");
const eight = document.querySelector(".btnEight");
const nine = document.querySelector(".btnNine");
const zero = document.querySelector(".btnZero");
const plusEl = document.querySelector(".plusBtn");
const minusEl = document.querySelector(".minusBtn");
const multiplyEl = document.querySelector(".btnMultiply");
const divideEl = document.querySelector(".btnDivide");
const dotEl = document.querySelector(".btnDot");
const resultEl = document.querySelector(".result-input");
const clearEl = document.querySelector(".clear-btn");
const equalEl = document.querySelector(".equalBtn");

let result = 0;

one.addEventListener("click", (e) => {
  e.preventDefault();
  const numberOne = 1;
  resultEl.value += numberOne;
});

two.addEventListener("click", (e) => {
  e.preventDefault();
  const numberTwo = 2;
  resultEl.value += numberTwo;
});

three.addEventListener("click", (e) => {
  e.preventDefault();
  const numberThree = 3;
  resultEl.value += numberThree;
});

four.addEventListener("click", (e) => {
  e.preventDefault();
  const numberFour = 4;
  resultEl.value += numberFour;
});

five.addEventListener("click", (e) => {
  e.preventDefault();
  const numberFive = 5;
  resultEl.value += numberFive;
});

six.addEventListener("click", (e) => {
  e.preventDefault();
  const numberSix = 6;
  resultEl.value += numberSix;
});

seven.addEventListener("click", (e) => {
  e.preventDefault();
  const numberSeven = 7;
  resultEl.value += numberSeven;
});

eight.addEventListener("click", (e) => {
  e.preventDefault();
  const numberEight = 8;
  resultEl.value += numberEight;
});

nine.addEventListener("click", (e) => {
  e.preventDefault();
  const numberNine = 9;
  resultEl.value += numberNine;
});

zero.addEventListener("click", (e) => {
  e.preventDefault();
  const numberZero = 0;
  resultEl.value += numberZero;
});

dotEl.addEventListener("click", (e) => {
  e.preventDefault();
  const numberDot = ".";
  resultEl.value += numberDot;
  if (resultEl.value.includes(".")) {
    return resultEl.value;
  } else {
    resultEl.value += numberDot;
  }
});

plusEl.addEventListener("click", (e) => {
  e.preventDefault();
  const plusSign = "+";
  resultEl.value += plusSign;
});

minusEl.addEventListener("click", (e) => {
  e.preventDefault();
  const minusSign = "-";
  resultEl.value += minusSign;
});

multiplyEl.addEventListener("click", (e) => {
  e.preventDefault();
  const multiplySign = "x";
  resultEl.value += multiplySign;
});

divideEl.addEventListener("click", (e) => {
  e.preventDefault();
  const divideSign = "/";
  resultEl.value += divideSign;
});

equalEl.addEventListener("click", (e) => {
  e.preventDefault();
  const total = resultEl.value;
  console.log(total);

  if (total.includes("+")) {
    const [...nums] = total.split("+");
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      console.log(nums[i]);
      result += Number(nums[i]);
    }
    resultEl.value = result;
    return result;
  } else if (total.includes("-")) {
    const [...nums] = total.split("-");

    for (let i = 0; i < nums.length; i++) {
      console.log(nums[i]);
      if (result === 0) {
        result = Number(nums[i]);
      } else {
        result -= Number(nums[i]);
      }
    }
    resultEl.value = result;
    return result;
  } else if (total.includes("x")) {
    const [...nums] = total.split("x");
    for (let i = 0; i < nums.length; i++) {
      console.log(nums[i]);
      if (result === 0) {
        result = Number(nums[i]);
      } else {
        result *= Number(nums[i]);
      }
    }
    resultEl.value = result;
    return result;
  } else if (total.includes("/")) {
    const [...nums] = total.split("/");
    for (let i = 0; i < nums.length; i++) {
      console.log(nums[i]);
      result /= Number(nums[i]);
    }
    resultEl.value = result;
    return result;
  } else if (total.includes("+") && total.includes("-")) {
  }
});

clearEl.addEventListener("click", (e) => {
  result = 0;
  resultEl.value = "";
});
