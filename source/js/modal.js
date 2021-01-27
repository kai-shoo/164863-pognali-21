"use strict";

const modalPrices = document.querySelector(".modal--prices");
const showModal = document.querySelectorAll(".show-modal");
const closeButton = modalPrices.querySelector(".modal__button--close");

const closeModal = function () {
  modalPrices.classList.add("modal--hidden");
  document.body.style.overflow = "initial";
  document.removeEventListener("keydown", escapePressedHandler);
};

const escapePressedHandler = function (e) {
  e.preventDefault();

  if (e.key === "Escape" && !modalPrices.classList.contains(".modal-hidden")) {
    closeModal();
  }
};

showModal.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    modalPrices.classList.remove("modal--hidden");
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", escapePressedHandler);
  });
});

modalPrices.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__window") || e.target === closeButton) {
    e.preventDefault();

    closeModal();
  }
});
