// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

const leftBtnEl = document.querySelector(".left-btn");
const rightBtnEl = document.querySelector(".right-btn");
const card1El = document.querySelector("#carousel1");
const card2El = document.querySelector("#carousel2");
const card3El = document.querySelector("#carousel3");

leftBtnEl.addEventListener("click", function () {
  if (card1El.classList.contains("carousel-column-1"))
    card1El.classList.replace("carousel-column-1", "carousel-column-3");
  else if (card1El.classList.contains("carousel-column-2")) {
    card1El.classList.replace("carousel-column-2", "carousel-column-1");
    card1El.classList.replace("card-focussed", "card-unfocussed");
  } else if (card1El.classList.contains("carousel-column-3")) {
    card1El.classList.replace("carousel-column-3", "carousel-column-2");
    card1El.classList.replace("card-unfocussed", "card-focussed");
  }

  if (card2El.classList.contains("carousel-column-1"))
    card2El.classList.replace("carousel-column-1", "carousel-column-3");
  else if (card2El.classList.contains("carousel-column-2")) {
    card2El.classList.replace("carousel-column-2", "carousel-column-1");
    card2El.classList.replace("card-focussed", "card-unfocussed");
  } else if (card2El.classList.contains("carousel-column-3")) {
    card2El.classList.replace("carousel-column-3", "carousel-column-2");
    card2El.classList.replace("card-unfocussed", "card-focussed");
  }

  if (card3El.classList.contains("carousel-column-1"))
    card3El.classList.replace("carousel-column-1", "carousel-column-3");
  else if (card3El.classList.contains("carousel-column-2")) {
    card3El.classList.replace("carousel-column-2", "carousel-column-1");
    card3El.classList.replace("card-focussed", "card-unfocussed");
  } else if (card3El.classList.contains("carousel-column-3")) {
    card3El.classList.replace("carousel-column-3", "carousel-column-2");
    card3El.classList.replace("card-unfocussed", "card-focussed");
  }
});

rightBtnEl.addEventListener("click", function () {
  if (card1El.classList.contains("carousel-column-1")) {
    card1El.classList.replace("carousel-column-1", "carousel-column-2");
    card1El.classList.replace("card-unfocussed", "card-focussed");
  } else if (card1El.classList.contains("carousel-column-2")) {
    card1El.classList.replace("carousel-column-2", "carousel-column-3");
    card1El.classList.replace("card-focussed", "card-unfocussed");
  } else if (card1El.classList.contains("carousel-column-3")) {
    card1El.classList.replace("carousel-column-3", "carousel-column-1");
  }

  if (card2El.classList.contains("carousel-column-1")) {
    card2El.classList.replace("carousel-column-1", "carousel-column-2");
    card2El.classList.replace("card-unfocussed", "card-focussed");
  } else if (card2El.classList.contains("carousel-column-2")) {
    card2El.classList.replace("carousel-column-2", "carousel-column-3");
    card2El.classList.replace("card-focussed", "card-unfocussed");
  } else if (card2El.classList.contains("carousel-column-3")) {
    card2El.classList.replace("carousel-column-3", "carousel-column-1");
  }

  if (card3El.classList.contains("carousel-column-1")) {
    card3El.classList.replace("carousel-column-1", "carousel-column-2");
    card3El.classList.replace("card-unfocussed", "card-focussed");
  } else if (card3El.classList.contains("carousel-column-2")) {
    card3El.classList.replace("carousel-column-2", "carousel-column-3");
    card3El.classList.replace("card-focussed", "card-unfocussed");
  } else if (card3El.classList.contains("carousel-column-3")) {
    card3El.classList.replace("carousel-column-3", "carousel-column-1");
  }
});
