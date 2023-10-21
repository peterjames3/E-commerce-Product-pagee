# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](HTML, Tailwindcss, Vanilla javascript Bundler: Vite)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](# Tailwind.com, stackoverflow )
- [Author](Hanzo)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./Screenshot 2023-10-21 141036.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwindcss
- Flexbox
- Tailwindcss Grid
- Mobile-first workflow

### What I learned

Direction-aware effects using Tailwindcss
How to add page content dynamically using Js
How target dynamic content and manipulate them
Maintaining state in Vanilla js using Flags
How to use Module using common JS
Advanced concept of event delegation and bubbling

To see how you can add code snippets, see below:

```html direction-aware effect
<li
  class="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
>
  Collection
</li>
<li
  class="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
>
  Men
</li>
<li
  class="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
>
  Women
</li>
<li
  class="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
>
  About
</li>
<li
  class="relative after:bg-orange-500 after:absolute after:h-1 after:w-0 after:top-[65px] after:left-0 hover:after:w-full after:transition-all after:duration-500 hover:font-medium hover:cursor-pointer transition-all delay-300"
>
  Contact
</li>
```

```js
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

}
```

```js
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
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

_peter_

### Continued development

Event delegation and bubbling

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Tailwincss.com](https://www.Tailwindcss.com) - This helped me to reference some of the tailwind classes.

## Author

- Frontend Mentor - [@Hanzo](https://www.frontendmentor.io/profile/Hanzo)
