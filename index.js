document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll("#stepper-header .step");
  const contents = document.querySelectorAll("#stepper-content .step-content");
  const belowContents = document.querySelectorAll(
    "#stepper-below-content .step-content"
  );
  let currentStep = 0;
  const totalSteps = steps.length;

  // Function to update the active step
  function goToStep(index) {
    // Remove active classes
    steps.forEach((s) => s.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    belowContents.forEach((c) => c.classList.remove("active"));

    // Add active class to the current step and corresponding content
    steps[index].classList.add("active");
    contents[index].classList.add("active");
    belowContents[index].classList.add("active");
  }

  // Auto-play functionality: change step every 2 seconds
  setInterval(() => {
    currentStep = (currentStep + 1) % totalSteps;
    goToStep(currentStep);
  }, 2000);

  // Click event for manual navigation
  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      currentStep = index; // Update the current step to the clicked one
      goToStep(currentStep);
    });
  });
});
