"use strict";

const headerWrapper = document.querySelector(".page__header");

const header = document.querySelector(".page-header");
const toggle = document.querySelector(".page-header__toggle");

const navHeight = header.getBoundingClientRect().height;

const init = function () {
  header.classList.toggle("page-header--no-js");
  header.classList.toggle("page-header--inactive");
};

init();

const doToggle = function () {
  header.classList.toggle("page-header--active");
  header.classList.toggle("page-header--inactive");
};

toggle.addEventListener("click", function (e) {
  e.preventDefault();

  doToggle();
});

// KEYS , MOUSE EXITS

document.addEventListener("click", function (e) {
  e.preventDefault();

  if (header.classList.contains("page-header--active")) {
    if (!e.target.closest(".page-header")) {
      doToggle();
    }
  }
});

// STICKY NAV

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("page-header--fixed");
  else header.classList.remove("page-header--fixed");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.99,
});

headerObserver.observe(headerWrapper);
