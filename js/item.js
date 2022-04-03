"use strict";

const headerContainerEl = document.querySelector(".header > .container");

window.addEventListener("scroll", function () {
  let yAxis = window.scrollY;
  if (yAxis >= 70) {
    headerEl.classList.add("header-clearfix");
    headerContainerEl.style.background = "var(--bg-color)";
  } else {
    headerEl.classList.remove("header-clearfix");
    headerContainerEl.style.background = "transparent";
  }
});
