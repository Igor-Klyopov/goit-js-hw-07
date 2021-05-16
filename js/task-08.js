// Elements references
const inputNumberOfBoxes = document.querySelector(
  "#controls input[type='number']"
);
const btnCreateBoxRef = document.querySelector(
  "#controls button[data-action='render']"
);
const btnDeleteBoxRef = document.querySelector(
  "#controls button[data-action='destroy']"
);
const boxesContainerRef = document.querySelector("#boxes");

// adding EventListeners
btnCreateBoxRef.addEventListener("click", onBtnCreateBoxClick);
btnDeleteBoxRef.addEventListener("click", onBtnDeleteBoxClick);

// Callback functions
function makeRandomRgbColor() {
  const rgbNumer = () => Math.floor(Math.random() * 256);

  const r = rgbNumer();
  const g = rgbNumer();
  const b = rgbNumer();

  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  const boxEls = [];

  for (let i = 0; i < amount; i += 1) {
    const boxParam = {
      width: `${30 + i * 10}px`,
      height: `${30 + i * 10}px`,
      bgColor: makeRandomRgbColor(),
    };
    boxEls.push(boxParam);
  }

  const makeBoxMurkup = ({ width, height, bgColor }) => {
    return `<div
      class="box"
      style="width: ${width}; 
      height: ${height}; 
      background-color: ${bgColor};
      margin: 5px"
    ></div>`;
  };

  const makeBoxsEls = (elements) => elements.map(makeBoxMurkup).join("");

  let boxesNumber = boxesContainerRef.getElementsByClassName("box").length;

  if (boxesNumber > 0 && boxesNumber <= amount) {
    return boxesContainerRef.insertAdjacentHTML(
      "beforeend",
      makeBoxsEls(boxEls.slice(boxesNumber))
    );
  }

  boxesContainerRef.innerHTML = makeBoxsEls(boxEls);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
  inputNumberOfBoxes.value = "";
}

//Event handlers functions
function onBtnCreateBoxClick() {
  createBoxes(inputNumberOfBoxes.value);
}

function onBtnDeleteBoxClick() {
  destroyBoxes();
}

//--вариант 2--//

// // Elements references
// const inputNumberOfBoxes = document.querySelector(
//   "#controls input[type='number']"
// );
// const btnCreateBoxRef = document.querySelector(
//   "#controls button[data-action='render']"
// );
// const btnDeleteBoxRef = document.querySelector(
//   "#controls button[data-action='destroy']"
// );
// const boxesContainerRef = document.querySelector("#boxes");

// // adding EventListeners
// btnCreateBoxRef.addEventListener("click", onBtnCreateBoxClick);
// btnDeleteBoxRef.addEventListener("click", onBtnDeleteBoxClick);

// // Callback functions
// function getRandomRgbColor() {
//   const rgbNumer = () => Math.floor(Math.random() * 256);

//   const r = rgbNumer();
//   const g = rgbNumer();
//   const b = rgbNumer();

//   return `rgb(${r}, ${g}, ${b})`;
// }

// function createBoxes(amount) {
//   const boxEls = [];
//   for (let i = 0; i < amount; i += 1) {
//     const boxEl = document.createElement("div");
//     boxEl.style.width = `${30 + i * 10}px`;
//     boxEl.style.height = `${30 + i * 10}px`;
//     boxEl.style.backgroundColor = getRandomRgbColor();
//     boxEl.style.margin = "5px";
//     boxEls.push(boxEl);
//   }

//   if (!boxesContainerRef.hasChildNodes()) {
//     boxesContainerRef.append(...boxEls);
//   }
// }

// function destroyBoxes() {
//   boxesContainerRef.innerHTML = "";
//   inputNumberOfBoxes.value = "";
// }

// //Event handlers functions
// function onBtnCreateBoxClick() {
//   createBoxes(inputNumberOfBoxes.value);
// }

// function onBtnDeleteBoxClick() {
//   destroyBoxes();
// }

//--вариант 3--//

// const controlsContainerRef = document.querySelector("#controls");
// const boxesRef = document.querySelector("#boxes");
// const сontrolsClick = onElControlsClick();

// controlsContainerRef.addEventListener("click", сontrolsClick);

// function onElControlsClick() {
//   let amount = 0;

//   return (e) => {
//     if (e.target.nodeName === "INPUT") {
//       amount = e.target.value;
//     }

//     if (
//       e.target.dataset.action === "render" &&
//       boxesRef.children.length === 0
//     ) {
//       createBoxes(amount);
//       amount = 0;
//     }

//     if (e.target.dataset.action === "destroy") {
//       destroyBoxes();
//     }
//   };
// }

// function makeRandomNumber(min, max) {
//   let random = min + Math.random() * (max + 1 - min);
//   return Math.floor(random);
// }

// function makeRandomRgbColor() {
//   const rgbColor = [0, 0, 0];
//   return rgbColor.map(() => makeRandomNumber(0, 255)).toString();
// }

// function createBoxes(amount) {
//   const boxEls = [];
//   let boxSideSize = 30;
//   boxEls.length = amount;
//   boxEls.fill(0);
//   const boxElsMurkup = boxEls
//     .map(
//       () =>
//         `<div class="box" style="margin: 5px; background-color: rgb(${makeRandomRgbColor()}); width: ${(boxSideSize += 10)}px; height: ${boxSideSize}px;"></div>`
//     )
//     .join("");
//   boxesRef.insertAdjacentHTML("beforeend", boxElsMurkup);
// }

// function destroyBoxes() {
//   boxesRef.innerHTML = "";
//   controlsContainerRef.children[0].value = "";
// }
