const validationInputRef = document.querySelector("#validation-input");
let validSymbolsCount = validationInputRef.getAttribute("data-length");
validationInputRef.addEventListener("change", highlightsInputValidation);

function highlightsInputValidation() {
  let inputValueLength = validationInputRef.value.length;

  validationInputRef.classList.add("invalid");

  if (
    inputValueLength === parseInt(validSymbolsCount) &&
    validationInputRef.value.trim() !== ""
  ) {
    validationInputRef.classList.replace("invalid", "valid");
  }

  if (validationInputRef.value === "") {
    validationInputRef.classList.remove("invalid", "valid");
  }
}
