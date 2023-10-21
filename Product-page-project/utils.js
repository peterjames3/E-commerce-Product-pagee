const numItems = document.querySelector("#counter");
const decrement = document.getElementById("minus");
const cartValue = document.querySelector("#item-value");
let num_cartValue = Number(cartValue.textContent);
const thumbnailContainer = document.getElementById("thumbnaildesktopview");
const desktopThumbnails = document.querySelectorAll(".thumbdesk");
const newItems = document.querySelector("#addItems");

let parsedValue = parseInt(numItems.textContent);

const mobileimg = document.querySelectorAll("#select-img");
const elementWidth = document.querySelector("#element-width");

const clearCart = document.querySelector("#clearContent");

let timeout;
const thumnNailProducts = thumbnailContainer.querySelectorAll(".thumbdesk");
const newContent = document.createElement("div");
let currentImg = null;
//a flag to maintain state
let itemAddedToCart = false;

function createAddToCartHandler(currentImg) {
  return function () {
    if (itemAddedToCart || parsedValue <= 0 || !currentImg) {
      return;
    }
    itemAddedToCart = true;

    let finalPrice = 125 * parsedValue;
    cartValue.textContent = parsedValue.toString();
    clearCart.textContent = "";
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
    <div class="block px-6 space-y-2">
    <div class="flex gap-4 items-center justify-center">
    <img src="${currentImg.src}" alt="" class="rounded-[.5rem] w-[2.5rem] h-[2.5rem]"/>
     <p>Fall Limited Edition Sneakers $125.00 x ${parsedValue}   <strong>$ ${finalPrice}.00 </strong></p>
     <img id="delete-item" onclick="deleteitems()" class="cursor-pointer w-[1rem] h-[1rem]" src="images/icon-delete.svg" alt="delete icon">
    </div>
     
     <button class="w-full rounded-xl py-3 px-7 bg-orange-500 text-white font-medium hover:cursor-pointer hover:bg-orange-400  transition-all delay-300">Checkout</button>
     </div>
    
    `;
    // add an event listener to the dynamicaly created image
    const deleteItemElement = cartItem.querySelector("#delete-item");
    deleteItemElement.onclick = () => {
      setTimeout(() => {
        cartItem.innerHTML = "";
        clearCart.textContent = "Your cart is empty";
        parsedValue = 0;
        cartValue.textContent = parsedValue;
        numItems.textContent = parsedValue;
        //Reset the flag
        itemAddedToCart = false;
        //De-select thumbnail
        desktopThumbnails.forEach((dthumb) => {
          dthumb.classList.remove("selected");
        });
        // Re-enable clicks on thumnails
        thumnNailProducts.forEach((image) => {
          image.addEventListener("click", handleThumbnailClick);
          image.style.pointerEvents = "auto";
        });
      }, 500);
    };

    newItems.appendChild(cartItem);
  };
}

function handleThumbnailClick(e) {
  const elementWidth = window.innerWidth;

  if (
    (elementWidth <= 640 && e.target.classList.contains("mobile")) ||
    (elementWidth > 640 && e.target.classList.contains("thumbnail"))
  ) {
    currentImg = e.target;
    let imageupdate = currentImg.src;
    // You can add any other code specific to each condition here
  }
}

function handleAddToCartButtonClick() {
  const addToCart = createAddToCartHandler(currentImg); // Pass the currentImg
  addToCart();

  // Disable further clicks on thumbnails
  thumnNailProducts.forEach((image) => {
    image.removeEventListener("click", handleThumbnailClick);
    image.style.pointerEvents = "none";
  });
}

// Attach click event listener to thumbnailContainer
thumbnailContainer.addEventListener("click", handleThumbnailClick);

function sayHi() {
  if (timeout !== undefined) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    parsedValue++; // Increment itemValue
    numItems.style.fontWeight = "900";
    numItems.innerText = `${parsedValue}`;
  }, 300);
}

function decrementItems() {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    if (parsedValue > 0) {
      parsedValue--; // decrement itemValue
      numItems.style.fontWeight = "900";
      numItems.innerText = `${parsedValue}`;
    } else if (parsedValue === 0) {
      numItems.innerText = 0;
    }
  }, 300);
}

desktopThumbnails.forEach((deskThumb) => {
  deskThumb.addEventListener("click", function () {
    // Remove "selected" class from all desktopThumbnails
    desktopThumbnails.forEach((dthumb) => {
      dthumb.classList.remove("selected");
    });

    // Add "selected" class to the clicked desktopThumb
    deskThumb.classList.add("selected");
  });
});

export { sayHi, decrementItems, handleAddToCartButtonClick };
