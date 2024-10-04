// // Generic validation patterns
// const patterns = {
//   name: /^[A-Za-z\s]+$/,
//   phone: /^\d{10}$/,
//   otp: /^\d{4}$/,
//   email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// };

// // Generic validation function
// function validateInput(value, type) {
//   return patterns[type].test(value);
// }

// // Function to validate and show error messages dynamically
// function validateAndShowError(inputElement, errorElementId, type) {
//   const value = inputElement.value.trim();
//   const isValid = validateInput(value, type);
//   const errorElement = document.getElementById(errorElementId);

//   if (!isValid && value !== "") {
//     errorElement.textContent = `Please enter a valid ${type}.`;
//   } else {
//     errorElement.textContent = ""; // Clear error message if valid or empty
//   }

//   return isValid;
// }

// // Function to validate checkboxes
// function validateCheckbox(inputElement, errorElementId) {
//   const isValid = inputElement.checked;
//   const errorElement = document.getElementById(errorElementId);

//   if (!isValid) {
//     errorElement.textContent = "You must accept the terms and conditions.";
//   } else {
//     errorElement.textContent = ""; // Clear error message
//   }

//   return isValid;
// }

// // Function to toggle submit button based on form validity
// function toggleSubmitButton(formId, buttonId, fields, checkbox) {
//   const isValidForm =
//     fields.every(({ id, type, errorId }) =>
//       validateAndShowError(document.getElementById(id), errorId, type)
//     ) &&
//     validateCheckbox(document.getElementById(checkbox.id), checkbox.errorId);

//   const submitBtn = document.getElementById(buttonId);

//   if (isValidForm) {
//     submitBtn.disabled = false;
//     submitBtn.classList.remove("submit-btn-disabled");
//     submitBtn.classList.add("submit-btn-enabled");
//   } else {
//     submitBtn.disabled = true;
//     submitBtn.classList.remove("submit-btn-enabled");
//     submitBtn.classList.add("submit-btn-disabled");
//   }
// }

// // Setup dynamic validation for form fields
// function setupValidation(formId, fields, buttonId, checkbox) {
//   fields.forEach(({ id, type, errorId }) => {
//     const inputElement = document.getElementById(id);
//     inputElement.addEventListener("input", () => {
//       validateAndShowError(inputElement, errorId, type);
//       toggleSubmitButton(formId, buttonId, fields, checkbox);
//     });
//   });

//   const checkboxElement = document.getElementById(checkbox.id);
//   checkboxElement.addEventListener("change", () => {
//     validateCheckbox(checkboxElement, checkbox.errorId);
//     toggleSubmitButton(formId, buttonId, fields, checkbox);
//   });
// }

// // Setup validation for "expertForm"
// setupValidation(
//   "expertForm",
//   [
//     { id: "fullname", type: "name", errorId: "nameError" },
//     { id: "phone", type: "phone", errorId: "phoneError" },
//     { id: "email", type: "email", errorId: "emailError" },
//   ],
//   "submitBtn",
//   { id: "termsCondition", errorId: "checkError" }
// );

// document
//   .getElementById("expertForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Hide the form
//     document.getElementById("expertForm").style.display = "none";

//     // Show the thank you message container
//     const thankYouMessage = document.getElementById("thankYouMessage");
//     thankYouMessage.style.display = "block";

//     // Play the video
//     const video = document.getElementById("thankYouVideo");
//     video.play();

//     setTimeout(() => {
//       // Reduce the size of the video
//       thankYouMessage.classList.add("reduceSize");

//       // Show the text immediately and animate it from bottom to top
//       document.getElementById("thankYouHeading").style.display = "block";
//       document.getElementById("thankYouText").style.display = "block";

//       // Trigger text animation
//       document.getElementById("thankYouHeading").classList.add("show");
//       document.getElementById("thankYouText").classList.add("show");
//     }, 4000);
//   });

// // Function to show OTP sent message
// function showOtpSentMessage(phoneNumber) {
//   const messageElement = document.getElementById("otpSentMessage");
//   messageElement.textContent = `We have sent the OTP to ${phoneNumber}.`;
//   messageElement.style.display = "block";
// }

// // Event listener for Send OTP button
// document.getElementById("sendOtpButton").addEventListener("click", () => {
//   const countryCode = document.getElementById("countryCode").value;
//   const phoneNumber = document
//     .getElementById("freeconsultationphone")
//     .value.trim();
//   if (validateInput(phoneNumber, "phone")) {
//     showOtpSentMessage(`${countryCode} ${phoneNumber}`);
//   } else {
//     document.getElementById("freeconsultationphoneError").textContent =
//       "Please enter a valid phone number.";
//   }
// });

// // Setup validation for "startSaving" form
// setupValidation(
//   "startSaving",
//   [
//     {
//       id: "freeconsultationname",
//       type: "name",
//       errorId: "freeconsultationnameError",
//     },
//     {
//       id: "freeconsultationphone",
//       type: "phone",
//       errorId: "freeconsultationphoneError",
//     },
//     { id: "otpInput", type: "otp", errorId: "otpInputError" },
//     {
//       id: "freeconsultationemail",
//       type: "email",
//       errorId: "freeconsultationemailError",
//     },
//   ],
//   "freeconsultationsubmitButton",
//   {
//     id: "freeconsultationtermsCondition",
//     errorId: "freeconsultationtermsConditionError",
//   }
// );

// document
//   .getElementById("startSaving")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Hide the form
//     document.getElementById("startSaving").style.display = "none";

//     // Show the thank you message container
//     const thankYouMessage = document.getElementById(
//       "freeconsultationthankYouMessage"
//     );
//     thankYouMessage.style.display = "block";

//     // Play the video
//     const video = document.getElementById("freeconsultationthankYouVideo");
//     video.play();

//     setTimeout(() => {
//       // Reduce the size of the video
//       thankYouMessage.classList.add("reduceSize");

//       // Show the text immediately and animate it from bottom to top
//       document.getElementById("freeconsultationthankYouHeading").style.display =
//         "block";
//       document.getElementById("freeconsultationthankYouText").style.display =
//         "block";

//       // Trigger text animation
//       document
//         .getElementById("freeconsultationthankYouHeading")
//         .classList.add("show");
//       document
//         .getElementById("freeconsultationthankYouText")
//         .classList.add("show");
//     }, 4000);
//   });

// Opening and Closing Brochure Modal
document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(".open-form-1");
  const modal = document.querySelector(".form-1");
  const modalContent = document.querySelector(".form-1 .modals");
  const closeIcon = document.querySelector(".form-1 .close-icon");
  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      showModal();
    });
  });

  closeIcon.addEventListener("click", function () {
    hideModal();
  });

  modal.addEventListener("click", function (e) {
    if (!modalContent.contains(e.target)) {
      hideModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(
    ".open-brochure-modal-container"
  );
  const modal = document.querySelector(".form-2");
  const modalContent = document.querySelector(".form-2 .modals");
  const closeIcon = document.querySelector(".form-2 .close-icon");
  function showModal() {
    modal.style.display = "flex";
    modal.offsetHeight;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      showModal();
    });
  });

  closeIcon.addEventListener("click", function () {
    hideModal();
  });

  modal.addEventListener("click", function (e) {
    if (!modalContent.contains(e.target)) {
      hideModal();
    }
  });
});

// Otp sent message
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".modals form").forEach((form) => {
    const countryCodeSelect = form.querySelector("#country-code");
    const phoneNumberCont = form.querySelector(".phone-number-container");
    const phoneNumberInput = form.querySelector("#phone-number");
    const sendOtpBtn = form.querySelector("#send-otp-btn");
    const otpSentMessage = form.querySelector("#otp-sent-message");
    const otpCont = form.querySelector(".otp-container");
    const otpInput = otpCont.querySelector(".input-group input");
    const otpVerification = otpCont.querySelector(
      ".input-group .otp-verification"
    );

    sendOtpBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const countryCode = countryCodeSelect.value;
      const phoneNumber = phoneNumberInput.value;

      if (phoneNumber) {
        otpSentMessage.textContent = `We have sent the OTP to ${countryCode} ${phoneNumber}.`;
        otpSentMessage.classList.add("active");
        phoneNumberCont.classList.add("sent");
        otpCont.style.display = "flex";
      } else {
        alert("Please enter a valid phone number.");
      }
    });

    otpInput.addEventListener("input", function () {
      if (otpInput.value.length === 4) {
        otpVerification.style.display = "block";
      } else {
        otpVerification.style.display = "none";
      }
    });
  });
});

// Checking Validity of Form
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".modals form");

  forms.forEach(function (form) {
    const submitButton = form.querySelector(".submit-btn");
    const checkBox = form.querySelector("#checkboxId");

    function checkFormValidity() {
      const isValid = form.checkValidity();

      if (isValid && checkBox.checked) {
        submitButton.disabled = false;
        submitButton.classList.add("active");
      } else {
        submitButton.disabled = true;
        submitButton.classList.remove("active");
      }
    }

    form.addEventListener("input", checkFormValidity);

    checkBox.addEventListener("change", checkFormValidity);
  });
});

// Confirmation Modal Popup and form reset
document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll(".submit-btn");
  const modals = document.querySelectorAll(".modals");
  const confirmationPopupModals = document.querySelectorAll(
    ".confirmation-popup-modal"
  );
  const closeIcons = document.querySelectorAll(".modal-container .close-icon");

  submitButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      modals[index].style.display = "none";
      const form = modals[index].querySelector("form");
      if (form) form.reset();

      const confirmationModal = confirmationPopupModals[index];
      confirmationModal.style.display = "block";

      const video = confirmationModal.querySelector("video");
      video.play();

      setTimeout(function () {
        video.classList.add("shrink");
        confirmationModal.classList.add("show");
      }, 3500);
    });
  });

  // closeIcons.forEach((closeIcon, index) => {
  //   closeIcon.addEventListener("click", function () {
  //     const confirmationModal = confirmationPopupModals[index];
  // const video = confirmationModal.querySelector("video");

  // confirmationPopupModals[index].style.display = "none";
  // modals[index].style.display = "block";
  // confirmationModal.classList.remove("show");
  // video.classList.remove("shrink");
  // });
  // });
});
