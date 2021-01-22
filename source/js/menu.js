"use strict";

const header = document.querySelector(".page-header");
const toggle = document.querySelector(".page-header__toggle");
const wrapper = document.querySelector(".wrapper--header-inactive");

const init = function () {
  header.classList.toggle("page-header--no-js");
  header.classList.toggle("page-header--inactive");
};

init();

const doToggle = function () {
  header.classList.toggle("page-header--active");
  header.classList.toggle("page-header--inactive");
  wrapper.classList.toggle("wrapper--header-active");
  wrapper.classList.toggle("wrapper--header-inactive");
};

toggle.addEventListener("click", function (e) {
  e.preventDefault();

  doToggle();
});

document.addEventListener("click", function (e) {
  if (header.classList.contains("page-header--active")) {
    if (!e.target.closest(".page-header")) {
      doToggle();
    }
  }
});
