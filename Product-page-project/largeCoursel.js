const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const imagelist = document.querySelectorAll(".aa, .bb, .cc, .dd");
const parentThumbnail = document.getElementById("parent-thumbnail");
const imgContainerOverlay = document.querySelector("#slider-overlay");
const thumbNailsImg = document.querySelectorAll("#thumbnailimg");
let isClicked = false;
let currentImg = 1;
nextBtn.addEventListener("click", function () {
  currentImg++;
  coursel();
});

prevBtn.addEventListener("click", function () {
  currentImg--;
  coursel();
});

coursel();

function coursel() {
  // Use querySelector to select the element with class "img-container"
  const sliderImageOverlay = document.querySelector(".img-container");
  const sliderImageOverlayWidth = sliderImageOverlay.clientWidth;

  if (currentImg > 4) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = 4;
  }

  sliderImageOverlay.style.transform = `translateX(-${
    (currentImg - 1) * sliderImageOverlayWidth
  }px)`;
}
thumbNailsImg.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", function () {
    thumbNailsImg.forEach((thumb) => {
      thumb.classList.remove("selected");
    });

    thumbnail.classList.add("selected");
    currentImg = index + 1;
    coursel();
  });
});

export { coursel };
