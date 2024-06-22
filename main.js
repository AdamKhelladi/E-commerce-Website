// Slider

const headerItems = document.querySelectorAll(".navBottom h3");
const wrapper = document.querySelector(".sliderWrapper");

headerItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    removeActiveClasses(headerItems);
    addActiveClass(item);

    wrapper.style.transform = `translateX(${-100 * index}vw)`
  });
});

function addActiveClass(element) {
  element.classList.add("active");
}
function removeActiveClasses(elements) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}
