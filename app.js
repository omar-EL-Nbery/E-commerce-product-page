let menuIcon = document.getElementById("menuIcon"); // Menu Icon
let navbar = document.getElementById("nav"); // Navbar
let closeIcon = document.getElementById("closeIcon"); // Close Icon
let cartIcon = document.getElementById("cartIcon"); // Cart Icon
let cart = document.getElementById("cart"); // Cart div

let nextButton = document.querySelector(".nexte"); // next image btn
let prevButton = document.querySelector(".preve"); // prev image btn
let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
let model = document.querySelector(".model");
let modelSlider = document.querySelector(".model-slider");
let closeModel = document.querySelector(".close");

let currentIndex = 0;

// open cart
cartIcon.addEventListener("click", () => {
  cart.classList.toggle("show__cart");
});

// open side bar
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show_side_bar");
});

//close side bar
closeIcon.addEventListener("click", () => {
  navbar.classList.toggle("show_side_bar");
});

// slider
function updateSlider() {
  modelSlider.style.transform = `translateX(-${currentIndex * 103}%)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

slider.addEventListener("click", () => {
  model.style.opacity = "1";
  model.style.visibility = "visible";
});

closeModel.addEventListener("click", () => {
  model.style.opacity = "0";
  model.style.visibility = "hidden";
});

//thumbnail
// First, select the main product image. You might need to adjust the selector based on your HTML structure.
const mainProductImage = document.querySelector(".model-slider .model-slide img");

// Then, select all the thumbnail images.
const thumbnails = document.querySelectorAll(".thumbs .thumb");


thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {

    mainProductImage.src = this.getAttribute("data-image");

    thumbnails.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});
