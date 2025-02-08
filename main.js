// Slider

const headerItems = document.querySelectorAll(".navBottom h3");
const wrapper = document.querySelector(".sliderWrapper");

const sliderItems = document.querySelectorAll(".sliderItem");

headerItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    removeActiveClasses(headerItems);
    addActiveClass(item);

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    selectedProduct(index);
  });
});

buyNowBtn();
function buyNowBtn() {
  sliderItems.forEach((sliderItem) => {
    const btn = sliderItem.querySelector("button");

    if (btn) {
      btn.addEventListener("click", (event) => {
        document.querySelector(".product").scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  });
}

// Products
const products = [
  {
    id: 1,
    title: "Air Force",
    description:
      "Air Force sneakers provide timeless style and exceptional comfort, making them a staple in any wardrobe. Designed for versatility, they cater to both athletes and casual wearers. Elevate your look with iconic footwear that transcends trends.",
    price: 119,
    colors: [
      {
        code: "black",
        img: "img/air.png",
      },
      {
        code: "darkblue",
        img: "img/air2.png",
      },
    ],
  },

  {
    id: 2,
    title: "Air Jordan",
    description:
      "Air Jordan sneakers provide timeless style and exceptional comfort, making them a staple in any wardrobe. Designed for versatility, they cater to both athletes and casual wearers. Elevate your look with iconic footwear that transcends trends.",
    price: 157,
    colors: [
      {
        code: "lightgray",
        img: "img/jordan.png",
      },
      {
        code: "green",
        img: "img/jordan2.png",
      },
    ],
  },

  {
    id: 3,
    title: "Blazer",
    description:
      "Blazer sneakers provide timeless style and exceptional comfort, making them a staple in any wardrobe. Designed for versatility, they cater to both athletes and casual wearers. Elevate your look with iconic footwear that transcends trends.",
    price: 299,
    colors: [
      {
        code: "lightgray",
        img: "img/blazer.png",
      },
      {
        code: "green",
        img: "img/blazer2.png",
      },
    ],
  },

  {
    id: 4,
    title: "Crater",
    description:
      "Crater sneakers provide timeless style and exceptional comfort, making them a staple in any wardrobe. Designed for versatility, they cater to both athletes and casual wearers. Elevate your look with iconic footwear that transcends trends.",
    price: 179,
    colors: [
      {
        code: "black",
        img: "img/crater.png",
      },
      {
        code: "lightgray",
        img: "img/crater2.png",
      },
    ],
  },

  {
    id: 5,
    title: "Hippie",
    description:
      "Hippie sneakers provide timeless style and exceptional comfort, making them a staple in any wardrobe. Designed for versatility, they cater to both athletes and casual wearers. Elevate your look with iconic footwear that transcends trends.",
    price: 139,
    colors: [
      {
        code: "gray",
        img: "img/hippie.png",
      },
      {
        code: "black",
        img: "img/hippie2.png",
      },
    ],
  },
];

const productImg = document.querySelector(".product img");
const productTitle = document.querySelector(".productInfo h1");
const productPrice = document.querySelector(".productInfo h2");
const productdescription = document.querySelector(".productInfo p");
const productSizes = document.querySelectorAll(".sizes .size");
const productColors = document.querySelectorAll(".productInfo .colors .color");

let choosenProduct = products[0];

function selectedProduct(index) {
  choosenProduct = products[index];

  productImg.src = choosenProduct.colors[0].img;
  productTitle.innerHTML = choosenProduct.title.toUpperCase();
  productPrice.innerHTML = `$${choosenProduct.price}`;
  productdescription.innerHTML = choosenProduct.description;

  productColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
  });
}

changingProductColor();
function changingProductColor() {
  productColors.forEach((color, index) => {
    color.addEventListener("click", (event) => {
      productImg.src = choosenProduct.colors[index].img;
    });
  });
}

changingSize();
function changingSize() {
  productSizes.forEach((size) => {
    size.addEventListener("click", (event) => {
      removeActiveClasses(productSizes);
      addActiveClass(size);
    });
  });
}

// Payment Box Logic
const paymentBox = document.querySelector(".payment");
const overlay = document.querySelector(".overlay");
const productSection = document.querySelector(".product");

productSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("paymentBtn")) {
    paymentBox.classList.add("show");
    overlay.classList.add("show");
    productSection.style.clipPath = "none";

  } else if (event.target.classList.contains("fa-xmark")) {
    paymentBox.classList.remove("show");
    overlay.classList.remove("show");
    productSection.style.clipPath =
      "polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)";
  }
});

// Global Functions 
function addActiveClass(element) {
  element.classList.add("active");
}
function removeActiveClasses(elements) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}







