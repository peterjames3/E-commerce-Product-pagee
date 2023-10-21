const wholeScreenModal = document.querySelector(".wholescreenmodal");
const sliderWidth = document.getElementById("slider").offsetWidth;

const closefullscreenmodal = () => {
  setTimeout(() => {
    wholeScreenModal.classList.toggle("hidden");
    wholeScreenModal.classList.add("opacity-100");
  }, 1000);
};
//how to write javascript function?

export { closefullscreenmodal };
