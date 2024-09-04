document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll("#stepper-header .step");
  const contents = document.querySelectorAll("#stepper-content .step-content");
  const belowContents = document.querySelectorAll(
    "#stepper-below-content .step-content"
  );

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      // Remove active classes
      steps.forEach((s) => s.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      belowContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked step and corresponding content
      step.classList.add("active");
      contents[index].classList.add("active");
      belowContents[index].classList.add("active");
    });
  });
});

// bootstrap slider js start
const carousel = document.getElementById('sliderAutoplay');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelector('.carousel-indicators');

// Clear existing indicators
indicators.innerHTML = '';

// Generate new indicators
carouselItems.forEach((item, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.bsTarget = '#sliderAutoplay';
  button.dataset.bsSlideTo = index;
  button.ariaLabel = `Slide ${index + 1}`;
  if (index === 0) {
    button.classList.add('active');
    button.ariaCurrent = 'true';
  }
  indicators.appendChild(button);
});
// bootstrap slider js end

// video js start
document.addEventListener("DOMContentLoaded", (event) => {
  const videos = document.querySelectorAll(".short-section .video-group video")

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.play().catch(error => {
        console.error('Error attempting to play video:', error);
      });
    });
    video.addEventListener("mouseleave", () => {
      video.pause();
    })
  })

  const videoVolume = document.querySelectorAll(".short-section .video-group .video-volume");

  videoVolume.forEach((item) => {
    const video = item.querySelector("video");
    const volumeUp = item.querySelector(".volume-setting .volume-up");
    const volumeMuted = item.querySelector(".volume-setting .volume-off");

    volumeUp.addEventListener(("click"), () => {
      video.setAttribute("muted", "")
      volumeUp.classList.add("hidden")
      volumeMuted.classList.remove("hidden")
    })

    volumeMuted.addEventListener(("click"), () => {
      video.removeAttribute("muted")
      volumeUp.classList.remove("hidden")
      volumeMuted.classList.add("hidden")
    })
  })
});

// responsive video
const videoGroup = document.querySelectorAll('.video-group');
videoGroup.forEach((box) => {
  const videoSlider = box.querySelector('.video-slider');
  const video = box.querySelectorAll('.video');
  const leftArrow = box.querySelector('.left-arrow');
  const rightArrow = box.querySelector('.right-arrow');

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

  leftArrow.addEventListener('click', () => {
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
      currentVideoIndex = videoCount - 1;
    }
    updateCarouselPosition();
  });

  rightArrow.addEventListener('click', () => {
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
// video js end

