// header - search
const searchStarterEl = document.querySelector("header .search-starter");
const searchEl = searchStarterEl.querySelector(".item");
const searchBarEl = searchStarterEl.querySelector(".item .search");
const inputEl = searchBarEl.querySelector("input");

searchStarterEl.addEventListener("click", function (event) {
  event.stopPropagation();
  if (searchEl.classList.contains("show")) {
    // hide
    hideSearch();
  } else {
    // show
    showSearch();
    // focus after transition 0.5s
  }
});

searchEl.addEventListener("mouseover", function (event) {
  event.stopPropagation();
});

searchBarEl.addEventListener("click", function (event) {
  event.stopPropagation();
});

window.addEventListener("mouseover", hideSearch);

function showSearch() {
  searchEl.classList.add("show");
  setTimeout(function () {
    inputEl.focus();
  }, 500);
}

function hideSearch() {
  searchEl.classList.remove("show");
  setTimeout(function () {
    inputEl.value = "";
  }, 500);
}

// header - cart
const cartStarterEl = document.querySelector("header .cart-starter");
const cartEl = cartStarterEl.querySelector(".item");

cartStarterEl.addEventListener("click", function (event) {
  event.stopPropagation();
  if (cartEl.classList.contains("show")) {
    // hide
    hideCart();
  } else {
    // show
    showCart();
  }
});

cartEl.addEventListener("mouseover", function (event) {
  event.stopPropagation();
});

window.addEventListener("mouseover", hideCart);

function showCart() {
  cartEl.classList.add("show");
}

function hideCart() {
  cartEl.classList.remove("show");
}
