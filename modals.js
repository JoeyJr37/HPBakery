// modals for menu item
"use strict";

// Get the modal
// const modal = document.getElementById("myModal");
const modals = document.querySelectorAll(".modal");
const modalsArray = Array.from(modals);

// Get the button that opens the modal
const btn = document.querySelectorAll(".menu-item");

btn.forEach((item, index) => {
  item.addEventListener("click", () => {
   modalsArray[index].classList.toggle("opened");
  });
});