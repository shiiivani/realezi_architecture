// Generic validation patterns
const patterns = {
  name: /^[A-Za-z\s]+$/,
  phone: /^\d{10}$/,
  otp: /^\d{4}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// Generic validation function
function validateInput(value, type) {
  return patterns[type].test(value);
}

// Function to validate and show error messages dynamically
function validateAndShowError(inputElement, errorElementId, type) {
  const value = inputElement.value.trim();
  const isValid = validateInput(value, type);
  const errorElement = document.getElementById(errorElementId);

  if (!isValid && value !== "") {
    errorElement.textContent = `Please enter a valid ${type}.`;
  } else {
    errorElement.textContent = ""; // Clear error message if valid or empty
  }

  return isValid;
}

// Function to validate checkboxes
function validateCheckbox(inputElement, errorElementId) {
  const isValid = inputElement.checked;
  const errorElement = document.getElementById(errorElementId);

  if (!isValid) {
    errorElement.textContent = "You must accept the terms and conditions.";
  } else {
    errorElement.textContent = ""; // Clear error message
  }

  return isValid;
}

// Function to toggle submit button based on form validity
function toggleSubmitButton(formId, buttonId, fields, checkbox) {
  const isValidForm =
    fields.every(({ id, type, errorId }) =>
      validateAndShowError(document.getElementById(id), errorId, type)
    ) &&
    validateCheckbox(document.getElementById(checkbox.id), checkbox.errorId);

  const submitBtn = document.getElementById(buttonId);

  if (isValidForm) {
    submitBtn.disabled = false;
    submitBtn.classList.remove("submit-btn-disabled");
    submitBtn.classList.add("submit-btn-enabled");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("submit-btn-enabled");
    submitBtn.classList.add("submit-btn-disabled");
  }
}

// Setup dynamic validation for form fields
function setupValidation(formId, fields, buttonId, checkbox) {
  fields.forEach(({ id, type, errorId }) => {
    const inputElement = document.getElementById(id);
    inputElement.addEventListener("input", () => {
      validateAndShowError(inputElement, errorId, type);
      toggleSubmitButton(formId, buttonId, fields, checkbox);
    });
  });

  const checkboxElement = document.getElementById(checkbox.id);
  checkboxElement.addEventListener("change", () => {
    validateCheckbox(checkboxElement, checkbox.errorId);
    toggleSubmitButton(formId, buttonId, fields, checkbox);
  });
}

// Setup validation for "expertForm"
setupValidation(
  "expertForm",
  [
    { id: "fullname", type: "name", errorId: "nameError" },
    { id: "phone", type: "phone", errorId: "phoneError" },
    { id: "email", type: "email", errorId: "emailError" },
  ],
  "submitBtn",
  { id: "termsCondition", errorId: "checkError" }
);

document
  .getElementById("expertForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Hide the form
    document.getElementById("expertForm").style.display = "none";

    // Show the thank you message container
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.style.display = "block";

    // Play the video
    const video = document.getElementById("thankYouVideo");
    video.play();

    setTimeout(() => {
      // Reduce the size of the video
      thankYouMessage.classList.add("reduceSize");

      // Show the text immediately and animate it from bottom to top
      document.getElementById("thankYouHeading").style.display = "block";
      document.getElementById("thankYouText").style.display = "block";

      // Trigger text animation
      document.getElementById("thankYouHeading").classList.add("show");
      document.getElementById("thankYouText").classList.add("show");
    }, 4000);
  });

// Function to show OTP sent message
function showOtpSentMessage(phoneNumber) {
  const messageElement = document.getElementById("otpSentMessage");
  messageElement.textContent = `We have sent the OTP to ${phoneNumber}.`;
  messageElement.style.display = "block";
}

// Event listener for Send OTP button
document.getElementById("sendOtpButton").addEventListener("click", () => {
  const countryCode = document.getElementById("countryCode").value;
  const phoneNumber = document
    .getElementById("freeconsultationphone")
    .value.trim();
  if (validateInput(phoneNumber, "phone")) {
    showOtpSentMessage(`${countryCode} ${phoneNumber}`);
  } else {
    document.getElementById("freeconsultationphoneError").textContent =
      "Please enter a valid phone number.";
  }
});

// Setup validation for "startSaving" form
setupValidation(
  "startSaving",
  [
    {
      id: "freeconsultationname",
      type: "name",
      errorId: "freeconsultationnameError",
    },
    {
      id: "freeconsultationphone",
      type: "phone",
      errorId: "freeconsultationphoneError",
    },
    { id: "otpInput", type: "otp", errorId: "otpInputError" },
    {
      id: "freeconsultationemail",
      type: "email",
      errorId: "freeconsultationemailError",
    },
  ],
  "freeconsultationsubmitButton",
  {
    id: "freeconsultationtermsCondition",
    errorId: "freeconsultationtermsConditionError",
  }
);

document
  .getElementById("startSaving")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the form
    document.getElementById("startSaving").style.display = "none";

    // Show the thank you message container
    const thankYouMessage = document.getElementById(
      "freeconsultationthankYouMessage"
    );
    thankYouMessage.style.display = "block";

    // Play the video
    const video = document.getElementById("freeconsultationthankYouVideo");
    video.play();

    setTimeout(() => {
      // Reduce the size of the video
      thankYouMessage.classList.add("reduceSize");

      // Show the text immediately and animate it from bottom to top
      document.getElementById("freeconsultationthankYouHeading").style.display = "block";
      document.getElementById("freeconsultationthankYouText").style.display = "block";

      // Trigger text animation
      document.getElementById("freeconsultationthankYouHeading").classList.add("show");
      document.getElementById("freeconsultationthankYouText").classList.add("show");
    }, 4000);
  });
