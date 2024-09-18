document.getElementById('scrollPrev').addEventListener('click', function() {
  document.querySelector('.video-container').scrollBy({
      left: -window.innerWidth / 2,
      behavior: 'smooth'
  });
});

document.getElementById('scrollNext').addEventListener('click', function() {
  document.querySelector('.video-container').scrollBy({
      left: window.innerWidth / 2,
      behavior: 'smooth'
  });
});

document.getElementById('bottomscrollPrev').addEventListener('click', function() {
  document.getElementById('bottom-video-container').scrollBy({
      left: -window.innerWidth / 2,
      behavior: 'smooth'
  });
});

document.getElementById('bottomscrollNext').addEventListener('click', function() {
  document.getElementById('bottom-video-container').scrollBy({
      left: window.innerWidth / 2,
      behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video");

  videoContainers.forEach((videoContainer) => {
    const video = videoContainer.querySelector("video");
    const volumeCont = videoContainer.querySelector(".volume-container");
    const volumeUpIcon = videoContainer.querySelector(".volume-up");
    const volumeOffIcon = videoContainer.querySelector(".volume-off");
    const videoSlider = videoContainer.closest(".video-slider");
    const videoWrapper = videoSlider.querySelector(".video-container");

    // Play/Pause video on click
    videoContainer.addEventListener("click", function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });

    // Pause animation on hover and show the volume icon
    videoContainer.addEventListener("mouseover", function () {
      videoWrapper.style.animationPlayState = "paused";
      volumeCont.classList.remove("hidden");
    });

    // Resume animation when hover ends and hide the volume icon
    videoContainer.addEventListener("mouseout", function () {
      videoWrapper.style.animationPlayState = "running";
      volumeCont.classList.add("hidden");
    });

    // Toggle mute and icons on click
    volumeUpIcon.addEventListener("click", function () {
      video.muted = true;
      volumeUpIcon.classList.add("hidden");
      volumeOffIcon.classList.remove("hidden");
    });

    volumeOffIcon.addEventListener("click", function () {
      video.muted = false;
      volumeOffIcon.classList.add("hidden");
      volumeUpIcon.classList.remove("hidden");
    });
  });
});

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

// bootstrap slider js
const carousel = document.getElementById("sliderAutoplay");
const carouselItems = carousel.querySelectorAll(".carousel-item");
const indicators = carousel.querySelector(".carousel-indicators");

// Clear existing indicators
indicators.innerHTML = "";

// Generate new indicators
carouselItems.forEach((item, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.bsTarget = "#sliderAutoplay";
  button.dataset.bsSlideTo = index;
  button.ariaLabel = `Slide ${index + 1}`;
  if (index === 0) {
    button.classList.add("active");
    button.ariaCurrent = "true";
  }
  indicators.appendChild(button);
});

// video js
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".short-section .video-group video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    });
    video.addEventListener("mouseleave", () => {
      video.pause();
    });
  });

  const videoVolume = document.querySelectorAll(
    ".short-section .video-group .video-volume"
  );

  videoVolume.forEach((item) => {
    const video = item.querySelector("video");
    const volumeUp = item.querySelector(".volume-setting .volume-up");
    const volumeMuted = item.querySelector(".volume-setting .volume-off");

    volumeUp.addEventListener("click", () => {
      video.setAttribute("muted", "");
      volumeUp.classList.add("hidden");
      volumeMuted.classList.remove("hidden");
    });

    volumeMuted.addEventListener("click", () => {
      video.removeAttribute("muted");
      volumeUp.classList.remove("hidden");
      volumeMuted.classList.add("hidden");
    });
  });

  // responsive video
  const videoGroup = document.querySelectorAll(".video-group");
  videoGroup.forEach((box) => {
    const videoSlider = box.querySelector(".video-slider");
    const video = box.querySelectorAll(".video");
    const leftArrow = box.querySelector(".left-arrow");
    const rightArrow = box.querySelector(".right-arrow");

    if (!videoSlider || video.length === 0 || !leftArrow || !rightArrow) {
      return;
    }

    let currentVideoIndex = 0;

    const videoWidth = video[0].offsetWidth;
    const videoCount = video.length;

    const firstCardClone = video[0].cloneNode(true);
    const lastCardClone = video[video.length - 1].cloneNode(true);
    videoSlider.appendChild(firstCardClone);
    videoSlider.insertBefore(lastCardClone, video[0]);

    leftArrow.addEventListener("click", () => {
      currentVideoIndex--;
      if (currentVideoIndex < 0) {
        currentVideoIndex = videoCount - 1;
      }
      updateCarouselPosition();
    });

    rightArrow.addEventListener("click", () => {
      currentVideoIndex++;
      if (currentVideoIndex >= videoCount) {
        currentVideoIndex = 0;
      }
      updateCarouselPosition();
    });

    function updateCarouselPosition() {
      const newTransform = `translateX(${currentVideoIndex * -videoWidth}px)`;
      videoSlider.style.transform = newTransform;
    }

    updateCarouselPosition();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var modalElement = document.getElementById("freeConsultation");
  var modalDialog = modalElement.querySelector(".modal-dialog");

  // Add zoom-in class when modal is shown
  modalElement.addEventListener("show.bs.modal", function () {
    modalDialog.classList.remove("zoom-out");
    modalDialog.classList.add("zoom-in");
  });

  // Add zoom-out class when modal is hidden
  modalElement.addEventListener("hide.bs.modal", function () {
    modalDialog.classList.remove("zoom-in");
    modalDialog.classList.add("zoom-out");
  });

  // Remove the zoom-out class after the transition ends
  modalElement.addEventListener("hidden.bs.modal", function () {
    modalDialog.classList.remove("zoom-out");
  });
});
