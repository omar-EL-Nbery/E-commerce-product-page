let menuIcon = document.querySelector(".icon-menu");
let closeIcon = document.querySelector(".icon-close");
let addToCartBtn = document.querySelector(".add-to-cart-btn");
let plusBtm = document.querySelector(".plus");
let cartIcon = document.querySelector(".cart-icon");
let minusBtn = document.querySelector(".minus");
let cartWrap = document.querySelector(".cart-wrap");
let numOfProducts = document.querySelector(".value-num");
let cartCar = document.querySelector(".cart-car");
let nextImgBtn = document.querySelectorAll(".nextSlider");
let preveSlider = document.querySelectorAll(".preveSlider");
let thumbnailSlider = document.querySelectorAll(".thumbnail-img img");
let mainImg = document.querySelector(".mainImg");
let modal = document.querySelector(".modal");
let slide = document.querySelectorAll(".slide")
let slideImg = document.querySelectorAll(".slide img");
let closeModalIcon = document.querySelector(".closeIcon")
let currentImageIndex = 0;
let x = 0;

addToCartBtn.addEventListener("click", addProduct);

menuIcon.addEventListener("click", menu);
closeIcon.addEventListener("click", menu);
minusBtn.addEventListener("click", removeProductsFromCart);
plusBtm.addEventListener("click", addItemToCartt);
cartIcon.addEventListener("click", () => {
  cartWrap.classList.toggle("unvisbile");
});

nextImgBtn.forEach((btn)=>{
  btn.addEventListener("click", showNextImg);
})

preveSlider.forEach((btn)=>{
  btn.addEventListener("click", ShowPrevImg);
  
})
function menu() {
  let sideBar = document.querySelector(".side-bar");
  sideBar.classList.toggle("is-sidebar-active");
}

function addItemToCartt() {
  x++;
  numOfProducts.innerHTML = x;
}

function removeProductsFromCart() {
  let numOfProducts = document.querySelector(".value-num");
  let cartCar = document.querySelector(".cart-car");

  if (x === 0) {
    x = 0;
  } else {
    x--;
    numOfProducts.innerHTML = x;
  }
}

function addProduct() {
  let cartItemWrap = document.querySelector(".cart-items");
  let cartCar = document.querySelector(".cart-car");

  let conntent = `
        <div class="cart-item">
            <img src="./images/image-product-1-thumbnail.jpg" alt="" class="cart-product-img">
            <div class="text"><p>
              Fall Limited Edition Sneakers <br>
              $125.00 x ${x}<span> ${125 * x}.00$</span>
            </p></div>
            <img class="delet-icon" src="./images/icon-delete.svg " alt="delete">
          </div>
  
  `;

  cartItemWrap.innerHTML = conntent;
  cartCar.innerHTML = x;

  let deletProduct = document.querySelector(".delet-icon");
  deletProduct.addEventListener("click", () => {
    cartItemWrap.innerHTML = "Empty";
    cartCar.innerHTML = 0;
  });
}




function showNextImg() {
  if (currentImageIndex == slide.length - 5) {
    resetCarousel();
    return;
  }
  slide.forEach((img) => {
    img.style.transform = `translate(${(currentImageIndex + 1) * -100}%)`;
  });
  currentImageIndex++;

 
}

function ShowPrevImg() {
  if (currentImageIndex === 0) return;

  slide.forEach((img) => {
    img.style.transform = `translate(${(currentImageIndex - 1) * -100}%)`;
  });
  currentImageIndex--;
}

function resetCarousel() {
  slide.forEach((img) => {
    //we are setting "none" so when every image gets back to position we don't want to show sliding effect
    img.style.transition = "none";
    img.style.transform = `translate(0)`; //every image back to original position
  });
  currentImageIndex = 0;
}

thumbnailSlider.forEach((img) => {
  img.addEventListener("click", () => {
    const newSrc = img.getAttribute("data-image");

    mainImg.src = newSrc;

    thumbnailSlider.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });

    img.classList.add("active");
  });
});

let slides = document.getElementById(".slides");

slideImg.forEach((img) =>{
  img.addEventListener("click", () => {
   modal.style.display = "block"
  });
})

closeModalIcon.addEventListener("click",()=>{
  modal.style.display = "none"
})

