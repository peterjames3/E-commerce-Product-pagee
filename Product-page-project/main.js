import * as utils from "./utils";
import * as largeCoursel from "./largeCoursel";
import * as mainmodal from "./mainmodal";

const humburger = document.getElementById("humberger");
const navMenu = document.getElementById("nav-menu");
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const links = document.querySelectorAll("#link");
const closeMenu = document.getElementById("close");
const cart = document.querySelector("#cart");
const cartModal = document.getElementById("cart-modal");
const increment = document.querySelector("#add");
const decrement = document.getElementById("minus");

const sliderImage = document.querySelector(".sli");
const imageList = document.querySelectorAll(".tt");
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const sliderContainer = document.getElementById("slider");
const openFullScreenModal = document.getElementById("openfullscreenModal");
const closeWholeModal = document.getElementById("closewholemodal");
let currentImg = 1;
let timeout;

const toggleMenu = () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  nav.classList.add("opacity-100");
};

btn.addEventListener("click", () => {
  setTimeout(toggleMenu, 20);
});

closeMenu.addEventListener("click", () => {
  setTimeout(toggleMenu, 20);
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

window.addEventListener("resize", () => {
  const screenSize = window.innerWidth;

  if (screenSize == 640 || screenSize > 640) {
    nav.style.display = "hidden";
  } else {
  }
});

cart.addEventListener("click", () => {
  setTimeout(() => {
    cartModal.classList.add("opacity-100");
    cartModal.classList.toggle("hidden");
  }, 1000);
});
nextEl.addEventListener("click", () => {
  currentImg++;

  updateImg();
});
prevEl.addEventListener("click", () => {
  currentImg--;

  updateImg();
});

updateImg();

function updateImg() {
  const sliderWidth = sliderContainer.clientWidth;
  if (currentImg > 4) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = 4;
  }

  const translateXValue = (currentImg - 1) * sliderWidth;
  sliderImage.style.transform = `translateX(-${translateXValue}px)`;
}

largeCoursel.coursel();

const addToCartButton = document.querySelector("#submitItems");
addToCartButton.addEventListener("click", utils.handleAddToCartButtonClick);

increment.addEventListener("click", utils.sayHi);
decrement.addEventListener("click", utils.decrementItems);
closeWholeModal.addEventListener("click", mainmodal.closefullscreenmodal);
openFullScreenModal.addEventListener("click", mainmodal.closefullscreenmodal);
