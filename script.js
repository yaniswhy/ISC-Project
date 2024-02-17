const btn =document.querySelectorAll("nav .menu-button-img");
const menuList =document.querySelectorAll("nav .menulinks");
btn[0].addEventListener("click", function () {
   menuList[0].classList.toggle("active")
});


  const addToCartButton = document.querySelectorAll('.add-cart');
  const addToFavButton = document.querySelectorAll('.add-fav');
  const cartCounter_text = document.getElementById('cart-count');
  const favCounter_text = document.getElementById('fav-count');

  let cartCount = 0;
  let favCount = 0;

  function updateCartCount() {
    cartCount++;
    cartCounter_text.textContent = cartCount;
  }

  function updateFavCount() {
    favCount++;
    favCounter_text.textContent = favCount;
  }


  addToCartButton.forEach(function(button) {
    button.addEventListener('click', updateCartCount);
  });


  addToFavButton.forEach(function(button) {
    button.addEventListener('click', updateFavCount);
  });