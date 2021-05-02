const inputFontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputFontSizeControlRef.addEventListener("input", changeTextFontSize);

console.log(parseInt(inputFontSizeControlRef.value));

function changeTextFontSize() {
  textRef.style.fontSize = `${inputFontSizeControlRef.value}px`;
}
