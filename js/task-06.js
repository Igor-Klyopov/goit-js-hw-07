const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("change", highlightsInputValidation);

function highlightsInputValidation() {
  validationInputRef.classList.remove("valid");
  validationInputRef.classList.remove("invalid");

  if (
    validationInputRef.value.length ===
    parseInt(validationInputRef.dataset.length)
  ) {
    validationInputRef.classList.add("valid");
  } else if (
    validationInputRef.value.length >
    parseInt(validationInputRef.dataset.length)
  ) {
    validationInputRef.classList.add("invalid");
  }
}
