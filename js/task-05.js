const inputNameRef = document.querySelector("#name-input");
const spanNameOutputRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", changeSpanNameOutput);

function changeSpanNameOutput() {
  inputNameRef.value === ""
    ? (spanNameOutputRef.textContent = "незнакомец")
    : (spanNameOutputRef.textContent = inputNameRef.value);
}
