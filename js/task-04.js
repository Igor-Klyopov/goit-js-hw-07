//---вариант 1---//
const buttonIncrementRef = document.querySelector(
  '[data-action = "increment"]'
);

const buttonDecrementRef = document.querySelector(
  '[data-action = "decrement"]'
);

const counterValueRef = document.querySelector("#value");

let counterValue = 0;

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}

buttonIncrementRef.addEventListener("click", increment);
buttonDecrementRef.addEventListener("click", decrement);

//---вариант 2---//
// const buttonIncrementRef = document.querySelector(
//   '[data-action = "increment"]'
// );

// const buttonDecrementRef = document.querySelector(
//   '[data-action = "decrement"]'
// );

// const counterValueRef = document.querySelector("#value");

// let counterValue = 0;
// function showsUpdatedCounterValue() {
//   counterValueRef.textContent = counterValue;
// }

// function increment() {
//   counterValue += 1;
//   showsUpdatedCounterValue();
// }

// function decrement() {
//   counterValue -= 1;
//   showsUpdatedCounterValue();
// }

// buttonIncrementRef.addEventListener("click", increment);
// buttonDecrementRef.addEventListener("click", decrement);

//вариант 3
// const buttonIncrementRef = document.querySelector(
//   '[data-action = "increment"]'
// );

// const buttonDecrementRef = document.querySelector(
//   '[data-action = "decrement"]'
// );

// const counterValueRef = document.querySelector("#value");

// let counterValue = 0;
// const increment = function () {
//   counterValue += 1;
//   counterValueRef.textContent = counterValue;
// };

// const decrement = function () {
//   counterValue -= 1;
//   counterValueRef.textContent = counterValue;
// };

// buttonIncrementRef.addEventListener("click", increment);

// buttonDecrementRef.addEventListener("click", decrement);

//вариант 4
// const buttonIncrementRef = document.querySelector(
//   '[data-action = "increment"]'
// );

// const buttonDecrementRef = document.querySelector(
//   '[data-action = "decrement"]'
// );

// const counterValueRef = document.querySelector("#value");

// let counterValue = 0;

// const showsUpdatedCounterValue = () =>
//   (counterValueRef.textContent = counterValue);

// const increment = () => {
//   counterValue += 1;
//   showsUpdatedCounterValue();
// };

// const decrement = () => {
//   counterValue -= 1;
//   showsUpdatedCounterValue();
// };

// buttonIncrementRef.addEventListener("click", increment);

// buttonDecrementRef.addEventListener("click", decrement);

//вариант 5
// const buttonIncrementRef = document.querySelector(
//   '[data-action = "increment"]'
// );

// const buttonDecrementRef = document.querySelector(
//   '[data-action = "decrement"]'
// );

// const counterValueRef = document.querySelector("#value");

// let counterValue = 0;

// function onBtnIncrementClick() {
//   counterValue += 1;
//   showsUpdatedCounterValue();
// }

// function onBtnDecrementClick() {
//   counterValue -= 1;
//   showsUpdatedCounterValue();
// }

// function showsUpdatedCounterValue() {
//   counterValueRef.textContent = counterValue;
// }

// buttonIncrementRef.addEventListener("click", onBtnIncrementClick);

// buttonDecrementRef.addEventListener("click", onBtnDecrementClick);

//вариант 6
// const counterBlockRef = document.querySelector("#counter");
// const counterValueRef = counterBlockRef.querySelector("#value");

// function makeCounterValue() {
//   let counterValue = 0;

//   return (e) => {
//     if (e.target.dataset.action === "increment") {
//       counterValue += 1;
//     } else if (e.target.dataset.action === "decrement") {
//       counterValue -= 1;
//     }
//     counterValueRef.textContent = counterValue;
//   };
// }

// counterBlockRef.addEventListener("click", makeCounterValue());

// const changeCounterValue = makeCounterValue();
// counterBlockRef.addEventListener("click", makeCounterValue);
